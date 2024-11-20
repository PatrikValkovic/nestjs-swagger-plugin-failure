import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const createSwaggerDoc = (app: INestApplication) => SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
        .setTitle('Test app')
        .setVersion('1.0.0')
        .build(),
);
