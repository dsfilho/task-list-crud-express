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

    
})

app.listen(8080)