import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { ApiResponse } from 'src/api/apiResponse';

@Controller('users')
export class UsersController {
    constructor(private usersServie: UsersService) { }

    @Get()
    async all(): Promise<ApiResponse<User[]>> {
        try {
            const users = await this.usersServie.all();
            return ApiResponse.successResponse(users);
        } catch (error) {
            return ApiResponse.errorResponse('Failed to retrieve users');
        }
    }

    @Get(':id')
    find(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersServie.find(id);
    }

    @Post()
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.usersServie.create(user);
    }
}
