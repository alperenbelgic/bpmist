import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ProcessItemComponent, ProcessItem, Link, ConditionItem } from '../process-item/process-item.component';
import { ProcessItemSettingsComponent } from '../process-item-settings/process-item-settings.component';



@Component({
  selector: 'app-process-designer',
  templateUrl: './process-designer.component.html',
  styleUrls: ['./process-designer.component.css']
})
export class ProcessDesignerComponent implements OnInit {

  processItems: ProcessItem[] = [];
  selectedProcessItems: ProcessItem[] = [];

  lastXRecorded = 0;
  lastYRecorded = 0;
  xShift = 0;
  yShift = 0;
  clickedForDragDrop = false;

  isLinkBeingCreated = false;
  lineCreationStartX = 0;
  lineCreationStartY = 0;
  lineCreationEndX = 0;
  lineCreationEndY = 0;

  @ViewChild('itemSettings') settingItemComponent: ProcessItemSettingsComponent;

  @ViewChild('thebox') drawingBox: any;
  startedLinkItem: ProcessItem = null;

  get links(): Link[] {
    const links: Link[] = [];
    this.processItems.forEach((processItem: ProcessItem) => {
      processItem.links.forEach((link: Link) => {
        if (link.startItem === processItem) {
          links.push(link);
        }
      });
    });
    return links;
  }

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initialize();
  }

  log(parameter) { console.log(parameter); }

  swapSelection(processItem: ProcessItem) {

    processItem.isSelected = !processItem.isSelected;

    if (!processItem.isSelected) {
      this.selectedProcessItems = this.selectedProcessItems.filter((item) => item !== processItem);
    }
    else {
      this.selectedProcessItems.push(processItem);
    }
  }

  setSelection(processItem: ProcessItem, selected: boolean) {
    if (processItem.isSelected === selected) {
      return;
    }

    processItem.isSelected = selected;

    if (!processItem.isSelected) {
      this.selectedProcessItems = this.selectedProcessItems.filter((item) => item !== processItem);
    }
    else {
      this.selectedProcessItems.push(processItem);
    }
  }

  clickItem($event, processItem: ProcessItem) {
    console.log('click');

    $event.stopPropagation();
  }

  clickBox() {
    this.deselectAll();
  }
  deselectAll() {
    this.cd.detach();

    this.selectedProcessItems.forEach((selectedItem) => {
      selectedItem.isSelected = false;
    });
    this.selectedProcessItems = [];

    this.cd.detectChanges();
    this.cd.reattach();
  }

  initialize() {
    this.cd.detach();

    this.processItems.push(new ProcessItem({ text: '1', leftPx: 30, topPx: 100 }));

    this.cd.detectChanges();
    this.cd.reattach();
  }

  addItem() {
    this.cd.detach();

    this.arrangeHorizontalDistances();
    const lastItem = this.processItems.pop();
    const newItem = new ProcessItem({ text: 'new one', topPx: lastItem.topPx, leftPx: lastItem.leftPx + 1 });
    this.processItems.push(lastItem);
    this.processItems.push(newItem);
    this.arrangeHorizontalDistances();

    this.cd.detectChanges();
    this.cd.reattach();
  }

  addCondition() {
    this.cd.detach();

    this.arrangeHorizontalDistances();
    const lastItem = this.processItems.pop();
    const newItem = new ConditionItem({ text: 'new one', topPx: lastItem.topPx, leftPx: lastItem.leftPx + 1 });
    this.processItems.push(lastItem);
    this.processItems.push(newItem);
    this.arrangeHorizontalDistances();

    this.cd.detectChanges();
    this.cd.reattach();
  }

  mouseover(value: boolean, processItem: ProcessItem) {
    processItem.isMouseOn = value;
  }

  mousedown(processItem: ProcessItem, $event: any) {

    const endLinkHandled: boolean = this.handleEndLinkProcess(processItem);

    if (endLinkHandled) {
      return;
    }

    this.cd.detach();
    $event.stopPropagation();

    if ($event.which !== 1) {
      return;
    }

    this.clickedForDragDrop = false;

    setTimeout(() => {
      this.clickedForDragDrop = true;
    }, 100);

    processItem.isSelectedBeforeClick = processItem.isSelected;

    this.setSelection(processItem, true);

    this.selectedProcessItems.forEach((i) => {
      i.leftPxBeforeMove = i.leftPx;
      i.topPxBeforeMove = i.topPx;
    });

    this.lastXRecorded = $event.clientX;
    this.lastYRecorded = $event.clientY;

    this.cd.detectChanges();

    document.onmouseup = () => {
      console.log('mouse up');

      if (!this.clickedForDragDrop ||
        (processItem.leftPx === processItem.leftPxBeforeMove && processItem.topPx === processItem.topPxBeforeMove)
      ) {

        this.setSelection(processItem, !processItem.isSelectedBeforeClick);

        this.selectedProcessItems.forEach((i) => {
          i.leftPx = i.leftPxBeforeMove;
          i.topPx = i.topPxBeforeMove;
        });
      }
      else {
        this.cd.detectChanges();

        this.selectedProcessItems.forEach((i) => {
          i.topPx = Math.round(i.middleY / 80) * 80 - i.height / 2;
        });

        this.arrangeHorizontalDistances();

        if (this.selectedProcessItems.length === 1) {
          this.setSelection(processItem, false);
        }
        else if (this.selectedProcessItems.length > 1) {
          this.setSelection(processItem, true);
        }
      }

      document.onmouseup = null;
      document.onmousemove = null;

      this.cd.detectChanges();
      this.cd.reattach();
    };

    document.onmousemove = ($onMouseMoveEvent: any) => {

      this.xShift = this.lastXRecorded - $onMouseMoveEvent.clientX;
      this.yShift = this.lastYRecorded - $onMouseMoveEvent.clientY;

      this.lastXRecorded = $onMouseMoveEvent.clientX;
      this.lastYRecorded = $onMouseMoveEvent.clientY;

      this.selectedProcessItems.forEach((i) => {
        i.leftPx = i.leftPx - this.xShift;
        i.topPx = i.topPx - this.yShift;
      });

      this.cd.detectChanges();
    };
  }

  arrangeHorizontalDistances() {
    const sortedProcessItems = this.processItems.sort((a, b) => a.leftPx - b.leftPx);
    const buffer = 70;
    let i: number;
    for (i = 1; i < sortedProcessItems.length; i++) {
      const previousItem = sortedProcessItems[i - 1];
      const currentItem = sortedProcessItems[i];

      const minLeft = previousItem.leftPx + previousItem.width + buffer;

      if (currentItem.leftPx < minLeft) {
        currentItem.leftPx = minLeft;
      }
    }
  }

  startLinkProcess($event: any) {

    const processItem = $event.processItem;
    const $clickedEvent = $event.event;

    const endLinkHandled: boolean = this.handleEndLinkProcess(processItem);

    if (endLinkHandled) {
      return;
    }

    this.isLinkBeingCreated = true;
    this.startedLinkItem = processItem;
    this.lineCreationEndX = this.lineCreationStartX = processItem.middleX;
    this.lineCreationEndY = this.lineCreationStartY = processItem.middleY;

    const drawingBoxRectangle = this.drawingBox.nativeElement.getBoundingClientRect();

    this.lineCreationEndX = $clickedEvent.clientX - drawingBoxRectangle.left;
    this.lineCreationEndY = $clickedEvent.clientY - drawingBoxRectangle.top;

    let previousX = $clickedEvent.clientX;
    let previousY = $clickedEvent.clientY;

    document.onmousemove = (ev: MouseEvent) => {

      // return;

      let shiftX = previousX - ev.clientX;
      let shiftY = previousY - ev.clientY;

      console.log('shiftX', shiftX);

      previousX = ev.clientX;
      previousY = ev.clientY;

      this.lineCreationEndX = this.lineCreationEndX - shiftX;
      this.lineCreationEndY = this.lineCreationEndY - shiftY;
    };
  }

  handleEndLinkProcess(processItem: ProcessItem): boolean {

    if (!this.isLinkBeingCreated) {
      return false;
    }

    if (this.startedLinkItem == null) {
      // unexpected case
      this.startedLinkItem = processItem;
      return true;
    }

    if (this.startedLinkItem === processItem) {
      this.isLinkBeingCreated = false;
      this.startedLinkItem = null;

      return true;
    }

    const link = new Link({ actionName: 'Submit', startItem: this.startedLinkItem, endItem: processItem });

    this.startedLinkItem.links.push(link);
    processItem.links.push(link);

    this.isLinkBeingCreated = false;
    this.startedLinkItem = null;

    return true;
  }

  openSettingDialogue(processItem: ProcessItem) {
    this.settingItemComponent.open(processItem);
  }
}
