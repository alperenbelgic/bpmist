import { ProcessItemComponent } from 'src/app/components/process-item/process-item.component';
import { ProcessItem } from './ProcessItem';

export class ProcessItemVisualState {

  constructor(private processItem: ProcessItem) {

  }

  visible = false;

  leftPxBeforeMove = 0;
  topPxBeforeMove = 0;

  isSelected = false;
  component: ProcessItemComponent;

  get width(): number {

    return this.component?.getWidth() ?? 0;
  }

  get height(): number {
    return this.component?.getHeight() ?? 0;
  }


  get middleX(): number {
    return this.processItem.leftPx + ((this.component?.getWidth() ?? 0) / 2);
  }

  get middleY(): number {
    return this.processItem.topPx + ((this.component?.getHeight() ?? 0) / 2);
  }



}
