import { Id } from '../../../@shared/value-objects/id.vo';
import { BaseEntity } from '../../../@shared/entity/base-entity';

export type SpecialityProps = {
  id?: Id;
  name: string;
};

export class Speciality extends BaseEntity {
  private _name: string;
  value: string;

  constructor(props: SpecialityProps) {
    super(props.id);
    this._name = props.name;
  }

  get name(): string {
    return this._name;
  }
}
