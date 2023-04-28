import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER } from 'src/common/model/model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync(
      [
        {
          name: USER.name,
          useFactory: () => {
            return UserSchema;
          },
        },
      ],
    ),
  ],
  controllers: [UserController],
  providers: [UserService],  
})
export class UserModule {}
