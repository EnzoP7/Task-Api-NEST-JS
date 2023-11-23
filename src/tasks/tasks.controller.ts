import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private  taskService:TasksService ){}


@Get()
getTasks() {
  return this.taskService.getAllTasks();
}

@Post()
createTask(@Body() newTask:CreateTaskDto){
   return this.taskService.createTasks(newTask.title,newTask.description)   
    }


@Delete(':id')
deleteTask(@Param('id') id:string){
     this.taskService.deleteTasks(id)
}

@Patch(':id')
updateTask(@Param('id') id:string,@Body() updatedFields: UpdateTaskDto){
    return this.taskService.updateTask(id,updatedFields)
}








}






