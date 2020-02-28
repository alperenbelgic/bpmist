import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ProcessDesignerComponent } from '../process-designer/process-designer.component';

export class Link {

  public constructor(init?: Partial<Link>) {
    Object.assign(this, init);
  }

  actionName = '';
  startItem: ProcessItem;
  endItem: ProcessItem;
}

export class ProcessItem {

  public constructor(init?: Partial<ProcessItem>) {
    Object.assign(this, init);
  }

  isMouseOn = false;
  text = '';
  leftPx = 80;
  topPx = 80;
  leftPxBeforeMove = 0;
  topPxBeforeMove = 0;

  isSelected = false;
  isSelectedBeforeClick = false;
  component: ProcessItemComponent;
  parentComponent: ProcessDesignerComponent; // TODO: remove compoenent ref

  links: Link[] = [];

  get width(): number {
    return this.component ?.getWidth() ?? 0;
  }

  get height(): number {
    return this.component ?.getHeight() ?? 0;
  }

  get middleX(): number {
    // return this.leftPx;
    return this.leftPx + ((this.component ?.getWidth() ?? 0) / 2);
  }

  get middleY(): number {
    // return this.topPx;
    return this.topPx + ((this.component ?.getHeight() ?? 0) / 2);
  }
}

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']
})
export class ProcessItemComponent implements OnInit {

  @Input() processItem: ProcessItem;
  isSettingsVisible = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.processItem.component = this;
  }

  getWidth() {
    return this.el.nativeElement.offsetWidth;
  }

  getHeight() {
    return this.el.nativeElement.offsetHeight;
  }

  openSettings($event) {
    console.log('open settings');
    this.isSettingsVisible = true;
    $event.stopPropagation();
  }

  createLink($event) {
    $event.stopPropagation();

    // if (this.processItem.parentComponent.sourceStepForLinkCreation !== null) {
    //   // handle this in a central place and use it in all possible buttons/clicks

    //   return;
    // }

    this.processItem.parentComponent.startLinkProcess(this.processItem, $event);

  }

  mousedown($event: any) {
    $event.stopPropagation();
  }
}
