import { ProcessItemComponent } from 'src/app/components/process-item/process-item.component';
import { Link } from './Link';
import { ProcessItemVisualState } from './ProcessItemVisualState';

export class ProcessItem {

  public constructor(
    public id: string,
    protected retrievedFromServer: boolean,
    public topPx: number = 80,
    public leftPx: number = 80,
    public text: string = '',
    public deletable: boolean = true
  ) {

  }

  links: Link[] = []; // persistent

  // tslint:disable-next-line: variable-name
  protected _visualState: ProcessItemVisualState = new ProcessItemVisualState(this);

  get visualState(): ProcessItemVisualState {
    return this._visualState;
  }
}
