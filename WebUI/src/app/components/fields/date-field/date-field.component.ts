import { Component, OnInit, Input } from '@angular/core';
import { RenderingField } from '../../form/form.component';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

  @Input() field: RenderingField;

  constructor() { }

  ngOnInit(): void {
  }
}
