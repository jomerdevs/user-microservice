import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: ['.env'],
        isGlobal: true,
      }
    ),
    // configurando conexion a mongodb
    MongooseModule.forRootAsync(
      {
        useFactory: async () => ({ uri: process.env.URI_MONGODB, }),                                   
      },            
    ),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
