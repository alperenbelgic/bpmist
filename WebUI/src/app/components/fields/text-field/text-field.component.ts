import { Component, OnInit, Input } from '@angular/core';
import { RenderingField } from '../../form/form.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input() field: RenderingField;

  constructor() { }

  ngOnInit(): void {
  }

}
