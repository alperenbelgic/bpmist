import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';

import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']
})
export class ProcessItemComponent implements OnInit {

  @Input() processItem: ProcessItem;
  @Output() linkCreated: EventEmitter<any> = new EventEmitter();
  @Output() settingDialogueOpening = new EventEmitter<ProcessItem>();
  isSettingsVisible = false;

  constructor(
    private el: ElementRef) { }

  ngOnInit(): void {
    this.processItem.visualState.component = this;
  }

  getWidth() {
    return this.el.nativeElement.offsetWidth;
  }

  getHeight() {
    return this.el.nativeElement.offsetHeight;
  }

  openSettings($event) {

    this.settingDialogueOpening.emit(this.processItem);
  }

  createLink($event) {
    this.linkCreated.emit({
      processItem: this.processItem,
      event: $event
    });

  }
}
