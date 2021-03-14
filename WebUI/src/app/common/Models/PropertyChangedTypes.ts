import { BehaviorSubject, Observable, Subscription } from "rxjs";

type ChangeMode = 'added' | 'removed' | 'initialized' | 'orderChanged' | 'itemPropertyChanged';

export class ArrayChanged<T>{
  constructor(
    public array: T[],
    public changeMode: ChangeMode,
    public changedValue: T,
    public sender: any,
    public itemPropertyChanged: PC<T>) { }
}

export interface IPropertyChanged<T> {
  propertyChanged: Observable<PC<T>>;
}

export class ObservableArray<T extends IPropertyChanged<T>> extends BehaviorSubject<ArrayChanged<T>>{
  constructor(private owner: any) {
    super(new ArrayChanged<T>([], 'initialized', null, owner, null));
  }

  itemSubscriptions = new Map<T, Subscription>();

  getArray(): T[] {
    return super.value.array;
  }

  addItem(item: T) {
    const newArray = [...super.value.array, item];

    this.subscribeItem(item);

    super.next(new ArrayChanged(newArray, 'added', item, super.value.sender, null));
  }

  removeItem(item: T) {
    const newArray = super.value.array.filter(i => i != item);

    this.unSubscribeItem(item);

    super.next(new ArrayChanged(newArray, 'removed', item, super.value.sender, null));
  }

  updateOrder(array: T[]) {
    // TODO: check if same set of values sent.

    let orderChangeExist = false;

    for (let i = 0; i < array.length; i++) {
      if (super.value.array[i] != array[i]) {
        orderChangeExist = true;
        break;
      }
    }

    if (orderChangeExist) {
      super.next(new ArrayChanged(array, 'orderChanged', null, super.value.sender, null));
    }
  }

  private subscribeItem(item: T) {
    const subscription = item.propertyChanged.subscribe(propertyChanged => {

      super.next(new ArrayChanged(super.value.array, 'itemPropertyChanged', propertyChanged.sender, this.owner, propertyChanged));

    });

    this.itemSubscriptions.set(item, subscription);
  }

  private unSubscribeItem(item: T) {
    const subscription = this.itemSubscriptions.get(item);
    subscription.unsubscribe();
    this.itemSubscriptions.delete(item);
  }
}

export const nameof = <T>(name: keyof T) => name;

export class PC<T> {
  constructor(
    public propertyName: keyof T,
    public newValue: any,
    public oldValue: any,
    public sender: any
  ) { }
}
