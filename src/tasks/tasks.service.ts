import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import {v4} from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id:"1",
        title: "first task",
        description: "This is the first Task XD",
        status:TaskStatus.PENDING
    }]

getAllTasks(){
return this.tasks

}
createTasks(title:string, description:string){

const laTaskXD = {
    id:v4(),
    title,
    description,
    status:TaskStatus.PENDING
}

    this.tasks.push(laTaskXD)
    return laTaskXD

}

deleteTasks(id:string){
   this.tasks   =  this.tasks.filter(task => task.id !== id)
}


getTaskById(id:string) : Task{
   return  this.tasks.find((task) => task.id === id);

}

updateTask(id:string, updatedFields:UpdateTaskDto) : Task{
const task = this.getTaskById(id);
const newTask = Object.assign(task, updatedFields)
this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
return newTask


}

}
