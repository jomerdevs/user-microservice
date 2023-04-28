import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    Transport: Transport.RMQ,
    options:{
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.UserQueue,
    },
  });

  mongoose.connect(process.env.URI_MONGODB).then(
    () => { console.log('💾 Database connected 💾') },
    err => { console.log(err) }
  );

  await app.listen();
}
bootstrap();
