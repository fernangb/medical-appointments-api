import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { SpecialityModule } from './modules/speciality/app/speciality.module';

@Module({
  imports: [DatabaseModule, SpecialityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
