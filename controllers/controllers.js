
let Tasks = [];

async function getTasks(req,res){
    res.send(Tasks);
}

async function getTasksById(req,res){
    const id = req.params?.id
    console.log(id);
    if(!id){
        res.status(400).json({
            message:"Provide id"
        })
        return;
    }
    

    let task = Tasks.find(task => task.Id == id);
    res.status(200).send(task);
}

async function createTask(req,res){
    const title = req.body?.title;
    const description = req.body?.description;
    const id = req.body?.id;
    if(!title || !description || !id){
        res.status(400).json({
            Message:"Enter all Required fields"
        })
        return;
    }
    
   
    const task = {
        Id:id,
        title:title,
        description:description

    }
    Tasks.push(task);
    res.status(201).json({
        message:"Task Added Successfully !"
    })
}

async function updateTaskById(req,res){
    const id = req.params?.id
    const description = req.body.description;
    if(!description){
        res.status(400).json({
            message:"Provide required fields"
        })
        return;
    }
    Tasks.map(task => {
        if (task.Id == id){
            task.description = description
        }
    })
    res.status(200).json({
        message:"Task Updated Successfully"
    })
}

async function deleteTaskById(req,res){
    const id = req?.params?.id;
    if(!id){
        res.status(400).json({
            message:"provide id"
        })
        return;
    }

    Tasks = Tasks.filter(task => task.Id != id);
    res.status(200).json({
        message:"Task deleted successfull"
    })
}
module.exports = {
    getTasks,
    getTasksById,
    createTask,
    updateTaskById,
    deleteTaskById
}