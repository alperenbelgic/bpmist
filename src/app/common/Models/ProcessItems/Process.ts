import { ProcessItem } from './ProcessItem';
import { Link } from './Link';
import { Field } from '../Field/Field';
import { StepItem } from './StepItem';
import { RandomIdGenerator } from 'src/app/services/general.service';
import { FieldInStep } from '../Field/FieldInStep';

export class Process {

  constructor(
    private randomIdGenerator: RandomIdGenerator
  ) { }

  processId: string;

  processItems: ProcessItem[] = [];
  links: Link[] = [];

  fields: Field[] = [];

  addNewField(stepItem: StepItem) {

    const field = new Field(this.randomIdGenerator.generate());

    this.fields.push(field);

    const fieldInStep = new FieldInStep(
      this.randomIdGenerator.generate(),
      false,
      field,
      false,
      false);

    stepItem.fieldsInStep.push(fieldInStep);

    return { createdFieldInStep: fieldInStep };
  }

  addNewStep(stepName: string, topPx: number, leftPx: number) {
    this.processItems.push(new StepItem(this.randomIdGenerator.generate(), false, stepName, topPx, leftPx));
  }

  getAllUserTypeFields(): Field[] {
    return this.fields.filter(field => field.fieldType?.code === 'user');
  }
}
