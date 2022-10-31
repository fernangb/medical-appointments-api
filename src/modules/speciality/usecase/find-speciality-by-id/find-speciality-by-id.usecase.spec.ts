import { Test, TestingModule } from '@nestjs/testing';
import { Id } from '../../../../@shared/value-objects/id.vo';
import { Speciality } from '../../domain/speciality.entity';
import { SpeacialityRepository } from '../../repository/speciality.repository';
import { FindSpecialityByIdUseCase } from './find-speciality-by-id.usecase';

const MockRepository = () => {
  return {
    create: jest.fn(),
    findById: jest.fn(),
    toEntity: jest.fn(),
    toModel: jest.fn(),
  };
};

describe('CreateSpecialityUseCase', () => {
  let usecase: FindSpecialityByIdUseCase;
  let repository: SpeacialityRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindSpecialityByIdUseCase,
        {
          provide: SpeacialityRepository,
          useFactory: MockRepository,
        },
      ],
    }).compile();

    usecase = module.get<FindSpecialityByIdUseCase>(FindSpecialityByIdUseCase);
    repository = module.get<SpeacialityRepository>(SpeacialityRepository);
  });

  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  describe('execute', () => {
    it('should find a speciality by id', async () => {
      const id = '1';

      const speciality = new Speciality({
        id: new Id(id),
        name: 'speciality 1',
      });

      jest.spyOn(repository, 'findById').mockResolvedValue(speciality);

      expect(await usecase.execute(id)).toStrictEqual(speciality);
      expect(repository.findById).toBeCalled();
    });
  });
});
