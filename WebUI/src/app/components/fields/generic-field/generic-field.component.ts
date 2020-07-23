import { Component, OnInit, Input } from '@angular/core';
import { RenderingField } from '../../form/form.component';

@Component({
  selector: 'app-generic-field',
  templateUrl: './generic-field.component.html',
  styleUrls: ['./generic-field.component.css']
})
export class GenericFieldComponent implements OnInit {

  @Input() field: RenderingField;

  constructor() { }

  ngOnInit(): void {
  }
}
