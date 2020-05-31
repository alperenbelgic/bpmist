import { ProcessItem } from './ProcessItem';

export class Link {

  public constructor(init?: Partial<Link>) {
    Object.assign(this, init);
  }

  actionName = '';
  startItem: ProcessItem;
  endItem: ProcessItem;
}
