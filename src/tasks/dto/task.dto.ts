import { TaskStatus } from "../task.entity"
import {IsString,IsNotEmpty,MinLength,IsOptional,IsIn} from 'class-validator'

export class CreateTaskDto {
@IsString()
@IsNotEmpty()
@MinLength(3)
    title: string;
    

    @IsString()
    @IsNotEmpty()
    description: string;
  
}

export class UpdateTaskDto{

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.PENDING,TaskStatus.IN_PROGRESS])
    status?:TaskStatus
}