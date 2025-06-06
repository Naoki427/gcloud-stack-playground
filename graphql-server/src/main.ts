import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,  // 認証つけるならこれも必要
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();