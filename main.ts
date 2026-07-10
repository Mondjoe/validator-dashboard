import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix for all API routes
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('Charm_Capsule Validator Dashboard running on http://localhost:3000/api');
}

bootstrap();