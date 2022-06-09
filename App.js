const express = require('express');
const {v4} = require('uuid');

const app = express();

app.use(express.json());

const catalogoTask = [];

app.post("/projects" , (request,response) =>{
    
const project = {id,title,tasks} = request.body;
    
catalogoTask.push(project);

return response.json(project);

})

app.get("/projects",(request,response) =>{

    return response.json(catalogoTask);

})

app.put("/projects/:id",(request,response) =>{

    const {id} = request.params;
    const {title} = request.body;
    const indexTask = findTask(id,response);


    const task ={
        id,
        title,
        tasks
    }

    catalogoTask[indexTask] = task;

    return response.json(task);

})

app.delete("/projects/:id",(request,response) => {





})

const findTask = (id,response) =>{

    const indexTask = catalogoTask.findIndex(task => task.id === id);

    if(indexTask == -1){

        return response.status(404).json({error:'Task not found!'});
    }else{
        return indexTask;
    }
}

app.listen(8080)