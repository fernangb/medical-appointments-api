export type AddressProps = {
  street: string;
  number?: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
};

export class Address {
  private _street: string;
  private _number: number;
  private _complement?: string;
  private _neighborhood: string;
  private _city: string;
  private _state: string;
  private _country: string;
  private _zipcode: string;

  constructor(props: AddressProps) {
    this._street = props.street;
    this._number = props.number;
    this._complement = props.complement;
    this._neighborhood = props.neighborhood;
    this._city = props.city;
    this._state = props.state;
    this._country = props.country;
    this._zipcode = props.zipcode;
  }
}
