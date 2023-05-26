import { Controller} from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';

@Controller()
export class UserController {

    constructor( private readonly userService: UserService) {}

    @MessagePattern(UserMSG.GET_ALL)
    getAll(){
        return this.userService.getAll();
    }

    @MessagePattern(UserMSG.GET_BY_ID)
    getById(@Payload() id: string ){
        return this.userService.getById(id);
    }

    @MessagePattern(UserMSG.CREATE)
    create(@Payload() userDTO: UserDTO) {
        return this.userService.create(userDTO);
    }

    @MessagePattern(UserMSG.UPDATE)
    update(@Payload() payload: any ) {
        return this.userService.update(payload.id, payload.userDTO);
    }

    @MessagePattern(UserMSG.DELETE)
    delete(@Payload() id: string) {
        return this.userService.delete(id);
    }

    
}
