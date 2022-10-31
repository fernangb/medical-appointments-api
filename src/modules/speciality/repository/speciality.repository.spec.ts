import { Id } from '../../../@shared/value-objects/id.vo';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { Speciality } from '../domain/speciality.entity';
import { SpecialityModel } from './speciality.model';

const speciality = new Speciality({
  id: new Id('1'),
  name: 'speciality 1',
});

const specialityModel = new SpecialityModel();
specialityModel.id = speciality.id.value;
specialityModel.name = speciality.name;

describe('SpecialityRepository Unit Tests', () => {
  beforeEach(() => {
    return createConnection({
      type: 'postgres',
      database: ':memory:',
      dropSchema: true,
      entities: [SpecialityModel],
      synchronize: true,
      logging: false,
    });
  });

  afterEach(() => {
    const conn = getConnection();
    return conn.close();
  });

  describe('create', () => {
    it('should create a speciality', async () => {
      await getRepository(SpecialityModel).insert(specialityModel);

      const model = await getRepository(SpecialityModel).find({
        where: {
          id: '1',
        },
      });
      expect(model[0].id).toBe(specialityModel.id);
      expect(model[0].name).toBe(specialityModel.name);
    });
  });

  describe('findById', () => {
    it('should not find a speciality by id if does not exists', async () => {
      await getRepository(SpecialityModel).insert(specialityModel);

      const model = await getRepository(SpecialityModel).find({
        where: {
          id: '2',
        },
      });
      expect(model[0]).toBe(specialityModel.id);
      expect(model[0].name).toBe(specialityModel.name);
    });

    it('should find a speciality by id', async () => {
      await getRepository(SpecialityModel).insert(specialityModel);

      const model = await getRepository(SpecialityModel).find({
        where: {
          id: '1',
        },
      });
      expect(model[0].id).toEqual([]);
    });
  });
});
