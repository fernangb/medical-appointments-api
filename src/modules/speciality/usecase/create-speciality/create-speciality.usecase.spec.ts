import { Test, TestingModule } from '@nestjs/testing';
import { SpeacialityRepository } from '../../repository/speciality.repository';
import { CreateSpecialityInputDto } from './create-speciality-input.dto';
import { CreateSpecialityUseCase } from './create-speciality.usecase';

const MockRepository = () => {
  return {
    create: jest.fn(),
    findById: jest.fn(),
    toEntity: jest.fn(),
    toModel: jest.fn(),
  };
};

describe('CreateSpecialityUseCase', () => {
  let usecase: CreateSpecialityUseCase;
  let repository: SpeacialityRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateSpecialityUseCase,
        {
          provide: SpeacialityRepository,
          useValue: MockRepository(),
        },
      ],
    }).compile();

    usecase = module.get<CreateSpecialityUseCase>(CreateSpecialityUseCase);
  });

  it('should be defined', () => {
    expect(usecase).toBeDefined();
  });

  describe('execute', () => {
    it('should create a speciality', async () => {
      const input = { name: 'speciality 1' } as CreateSpecialityInputDto;

      jest.spyOn(repository, 'create').mockReturnValue(Promise.resolve());

      expect(await usecase.execute(input)).toEqual(undefined);
      expect(repository.create).toBeCalled();
    });
  });
});
