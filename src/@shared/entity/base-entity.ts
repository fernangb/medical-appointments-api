import { Id } from '../value-objects/id.vo';

export class BaseEntity {
  private _id: Id;

  constructor(id?: Id) {
    this._id = id;
  }

  get id(): Id {
    return this._id;
  }
}
