import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function mainApplication() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  console.log('🚀 Server running on port', 8080)
}

mainApplication();