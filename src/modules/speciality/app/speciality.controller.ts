import { Controller } from '@nestjs/common';
import { SpecialityService } from './speciality.service';

@Controller('speciality')
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) {}
}
