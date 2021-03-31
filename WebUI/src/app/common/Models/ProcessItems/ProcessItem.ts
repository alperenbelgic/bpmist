import { Observable, Subject } from 'rxjs';
import { ProcessItemComponent } from 'src/app/components/process-item/process-item.component';
import { IPropertyChanged, PC } from '../PropertyChangedTypes';
import { Link } from './Link';
import { ProcessItemVisualState } from './ProcessItemVisualState';

export class ProcessItem implements IPropertyChanged<ProcessItem> {

  public constructor(
    public readonly id: string,
    public justCreatedOnInterface: boolean,
    public retrievedFromServer: boolean,
    public topPx: number = 80,
    public leftPx: number = 80,
    public text: string = '',
    public deletable: boolean = true,
    public isFirstItem: boolean = false
  ) {

  }

  propertyChanged = new Subject<PC<ProcessItem>>();

  links: Link[] = []; // persistent

  // tslint:disable-next-line: variable-name
  protected _visualState: ProcessItemVisualState = new ProcessItemVisualState(this);

  get visualState(): ProcessItemVisualState {
    return this._visualState;
  }
}
