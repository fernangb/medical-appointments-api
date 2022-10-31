import { Id } from '../../../@shared/value-objects/id.vo';
import { Speciality, SpecialityProps } from './speciality.entity';

describe('Specaility Entity Unit Test', () => {
  it('should create a speciality', () => {
    const input = {
      id: new Id('1'),
      name: 'fake speciality',
    } as SpecialityProps;

    const speciality = new Speciality(input);

    expect(speciality).toBeDefined();
    expect(speciality.id).toBe(input.id);
    expect(speciality.name).toBe(input.name);
  });
});
