import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ProcessItemSettingsComponent } from '../process-item-settings/process-item-settings.component';
import { RandomIdGenerator } from 'src/app/services/Business/general.service';
import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';
import { Link } from 'src/app/common/Models/ProcessItems/Link';
import { StepItem } from 'src/app/common/Models/ProcessItems/StepItem';
import { ConditionItem } from 'src/app/common/Models/ProcessItems/ConditionItem';
import { Process } from 'src/app/common/Models/ProcessItems/Process';
import { UserGroupService } from 'src/app/services/Business/userGroup.service';

@Component({
  selector: 'app-process-designer',
  templateUrl: './process-designer.component.html',
  styleUrls: ['./process-designer.component.css']
})
export class ProcessDesignerComponent implements OnInit {

  process: Process;
  get processItems(): ProcessItem[] {
    return this.process?.processItems;
  }

  selectedProcessItems: ProcessItem[] = [];

  isLinkBeingCreated = false;
  lineCreationStartX = 0;
  lineCreationStartY = 0;
  lineCreationEndX = 0;
  lineCreationEndY = 0;

  // @ViewChildren(ProcessItemComponent) processItemComponents: QueryList<ProcessItemComponent>;

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

  constructor(
    private cd: ChangeDetectorRef,
    private randomIdGenerator: RandomIdGenerator,
    private userGroupService: UserGroupService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.cd.detach();

    this.process = new Process(this.randomIdGenerator, this.userGroupService);

    this.process.addNewStep('Request Entry', 30 + 80, 100);

    this.cd.detectChanges();
    this.cd.reattach();
  }
  setSelection(processItem: ProcessItem, selected: boolean) {
    if (processItem.visualState.isSelected === selected) {
      return;
    }

    processItem.visualState.isSelected = selected;

    if (!processItem.visualState.isSelected) {
      this.selectedProcessItems = this.selectedProcessItems.filter((item) => item !== processItem);
    } else {
      this.selectedProcessItems.push(processItem);
    }
  }

  clickBox() {
    this.deselectAll();
  }
  deselectAll() {
    this.cd.detach();

    this.selectedProcessItems.forEach((selectedItem) => {
      selectedItem.visualState.isSelected = false;
    });
    this.selectedProcessItems = [];

    this.cd.detectChanges();
    this.cd.reattach();
  }


  addItem() {
    this.cd.detach();

    this.arrangeHorizontalDistances();
    const lastItem = this.processItems.pop();

    const newItem = new StepItem(
      this.randomIdGenerator.generate(),
      true,
      false,
      '[New Step]',
      lastItem.topPx,
      lastItem.leftPx + 1,
      this.userGroupService.getDefaultResponsibleType(),
      this.userGroupService.getDefaultGroupAssignOption());

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
    const newItem = new ConditionItem(this.randomIdGenerator.generate(), true, false, 'new cond', lastItem.topPx, lastItem.leftPx + 1);
    this.processItems.push(lastItem);
    this.processItems.push(newItem);
    this.arrangeHorizontalDistances();

    this.cd.detectChanges();
    this.cd.reattach();
  }

  onProcessItemMouseDown(processItem: ProcessItem, $event: any) {

    const isClickForCompletingLink: boolean = this.handleEndLinkProcess(processItem);

    if (isClickForCompletingLink) {
      return;
    }

    this.cd.detach();

    if (!this.isLeftClick($event)) {
      return;
    }

    // we assume that it is clicked to make the box selected, not to drag and drop
    // we will use the value when mouse up event is caught
    let clickedForDragDrop = false;

    setTimeout(() => {
      // if it is not released(mouse up) within 100ms, (once it is released)-> we will consider the user's intention as drag and drop.
      clickedForDragDrop = true;
    }, 100);

    // we will revert this value and apply as selection if the click is for selection of the process item
    const isSelectedBeforeClick = processItem.visualState.isSelected;

    // we are making this selected
    // if the click is for drag & drop this is needed,
    // otherwise(selection) we will use the reverted value of isSelectedBeforeClick)
    this.setSelection(processItem, true);

    // we keep each item's initial position
    // we will use it if drag & drop operation is triggered
    this.selectedProcessItems.forEach((i) => {
      i.visualState.leftPxBeforeMove = i.leftPx;
      i.visualState.topPxBeforeMove = i.topPx;
    });

    // current mouse position (last position when drag & drop starts)
    let lastXRecorded = $event.clientX;
    let lastYRecorded = $event.clientY;

    document.onmouseup = () => {

      // user clicked for selection change
      if (!clickedForDragDrop ||
        (processItem.leftPx === processItem.visualState.leftPxBeforeMove && processItem.topPx === processItem.visualState.topPxBeforeMove)
      ) {

        this.setSelection(processItem, !isSelectedBeforeClick);

        this.selectedProcessItems.forEach((i) => {
          // if mouse position shifted during click (within 100ms between mousedown and mouseup),
          // we recover the position of each selected shape.
          i.leftPx = i.visualState.leftPxBeforeMove;
          i.topPx = i.visualState.topPxBeforeMove;
        });
      } else {
        // user clicked for drag & drop

        this.cd.detectChanges();

        // place each item in a vertical position that is k * 80
        this.selectedProcessItems.forEach((i) => {
          i.topPx = Math.round(i.visualState.middleY / 80) * 80 - i.visualState.height / 2;
        });

        this.arrangeHorizontalDistances();

        if (this.selectedProcessItems.length === 1) {
          // if there was one item drag&dropped, the intention is not to change selection
          this.setSelection(processItem, isSelectedBeforeClick);
        } else if (this.selectedProcessItems.length > 1) {
          // if there were multiple item, it would be good to make sure that the one we drag&drop is also in selected state,
          // even though it wasn't selected initially
          // we can consider that user thinks that it is in the same group with other selected ones.
          this.setSelection(processItem, true);
        }
      }

      document.onmouseup = null;
      document.onmousemove = null;

      this.cd.detectChanges();
      this.cd.reattach();
    };

    document.onmousemove = ($onMouseMoveEvent: any) => {

      // shift: difference between last recoded position and current mouse position
      const xShift = lastXRecorded - $onMouseMoveEvent.clientX;
      const yShift = lastYRecorded - $onMouseMoveEvent.clientY;

      // current mouse position will be used as last position in the next event trigger
      lastXRecorded = $onMouseMoveEvent.clientX;
      lastYRecorded = $onMouseMoveEvent.clientY;

      // apply x and y shifts to each selected element
      this.selectedProcessItems.forEach((i) => {
        i.leftPx = i.leftPx - xShift;
        i.topPx = i.topPx - yShift;
      });

      this.cd.detectChanges();
    };

    this.cd.detectChanges();
  }

  private isLeftClick($event: any) {
    return $event.which === 1;
  }

  arrangeHorizontalDistances() {

    if (this.processItems.length < 2) {
      return;
    }

    const sortedProcessItems = this.processItems.sort((a, b) => a.leftPx - b.leftPx);
    const buffer = 70;
    let i: number;
    for (i = 1; i < sortedProcessItems.length; i++) {
      const previousItem = sortedProcessItems[i - 1];
      const currentItem = sortedProcessItems[i];

      const minLeft = previousItem.leftPx + previousItem.visualState.width + buffer;

      if (currentItem.leftPx < minLeft) {
        currentItem.leftPx = minLeft;
      }
    }
  }

  startLinkProcess($event: any) {

    const processItem = $event.processItem as ProcessItem;
    const $clickedEvent = $event.event;

    const isClickForCompletingLink: boolean = this.handleEndLinkProcess(processItem);

    if (isClickForCompletingLink) {
      return;
    }

    this.isLinkBeingCreated = true;
    this.startedLinkItem = processItem;
    this.lineCreationEndX = this.lineCreationStartX = processItem.visualState.middleX;
    this.lineCreationEndY = this.lineCreationStartY = processItem.visualState.middleY;

    const drawingBoxRectangle = this.drawingBox.nativeElement.getBoundingClientRect();

    this.lineCreationEndX = $clickedEvent.clientX - drawingBoxRectangle.left;
    this.lineCreationEndY = $clickedEvent.clientY - drawingBoxRectangle.top;

    let previousX = $clickedEvent.clientX;
    let previousY = $clickedEvent.clientY;

    document.onmousemove = (ev: MouseEvent) => {

      // return;

      const shiftX = previousX - ev.clientX;
      const shiftY = previousY - ev.clientY;

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

  openSettingDialogue(stepItem: StepItem) {
    this.settingItemComponent.open(stepItem);
  }

  mouseEnter(arg) {
    console.log(arg);
  }

}
