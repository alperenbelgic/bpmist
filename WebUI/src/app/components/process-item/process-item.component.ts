import { Component, OnInit, Input, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']
})
export class ProcessItemComponent implements OnInit {

  _processItem: ProcessItem;

  get processItem(): ProcessItem { return this._processItem; }

  @Output() linkCreated: EventEmitter<any> = new EventEmitter();
  @Output() settingDialogueOpening = new EventEmitter<ProcessItem>();
  isSettingsVisible = false;
  showProcessItemNameEdit = false;

  @ViewChild("processItemNameTextArea") processItemNameTextArea: ElementRef;

  constructor(
    private el: ElementRef) { }

  @Input() set processItem(val: ProcessItem) {
    this._processItem = val;

    this.showProcessItemNameEdit = this._processItem.justCreatedOnInterface;

    if (this.showProcessItemNameEdit) {

      const that = this;
      setTimeout(() => {
        that.processItemNameTextArea.nativeElement.focus();
        that.processItemNameTextArea.nativeElement.select();
      }, 4000);
    }

  }

  ngOnInit(): void {
    this.processItem.visualState.component = this;
  }

  ngAfterViewInit() {
    this.processItem.topPx = Math.round(this.processItem.visualState.middleY / 80) * 80 - this.processItem.visualState.height / 2;
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

  swapShowProcessItemNameEdit() {
    this.showProcessItemNameEdit = true;
    setTimeout(() => {
      this.processItemNameTextArea.nativeElement.focus();
    }, 40);
  }

  submitProcessName() {
    this.showProcessItemNameEdit = false;
  }

  processItemNameSubmitted(event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    if (code == 13) { //Enter keycode
      this.showProcessItemNameEdit = false;
      return false;
    }
  }


}
