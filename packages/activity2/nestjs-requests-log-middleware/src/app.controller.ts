import { Controller, Get } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectPinoLogger(AppController.name)
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/ignore-log')
  getIgnoreLog() {
    this.logger.info({ name: 'AppController', log: 'ignore log added' });
    return this.appService.getHello();
  }

  @Get('/ignore-body-response')
  getIgnoreBodyResponse() {
    return this.appService.getHello();
  }
}
