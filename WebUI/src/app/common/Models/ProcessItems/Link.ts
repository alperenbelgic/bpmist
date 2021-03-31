import { ProcessItem } from './ProcessItem';

export class Link {

  public constructor(init?: Partial<Link>) {
    Object.assign(this, init);
  }

  actionName = '';
  startItem: ProcessItem;
  endItem: ProcessItem;

  get color() {
    const x1 = this.startItem.leftPx;
    const x2 = this.endItem.leftPx;

    return (x2 > x1) ? 'green' : 'indianred';

    // TODO: returning value should be static. it should be calculated in each relevant change.

    // return 'green';

  }
}
