import { Id } from 'src/@shared/value-objects/id.vo';
import { Speciality } from 'src/modules/speciality/domain/speciality.entity';
import { Clinic } from './clinic.entity';

describe('Clinic Entity Unit Tests', () => {
  it('should create a clinic', () => {
    const speciality = new Speciality({
      id: new Id('1'),
      name: 'Speciality 1',
    });

    const clinic = new Clinic({
      id: new Id('1'),
      name: 'Clínica A',
      address: 'Rua A, número 1',
      specialities: [speciality],
      schedule: 'open',
    });

    expect(clinic).toBeDefined();
    expect(clinic.id.value).toBe('1');
    expect(clinic.name).toBe('Clínica A');
    expect(clinic.address).toBe('Rua A, número 1');
    expect(clinic.schedule).toBe('open');
    expect(clinic.specialities).toStrictEqual([speciality]);
  });
});
