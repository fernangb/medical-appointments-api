import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { SpecialityModule } from './modules/speciality/app/speciality.module';
import { ClinicModule } from './modules/clinic/clinic.module';

@Module({
  imports: [DatabaseModule, SpecialityModule, ClinicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
