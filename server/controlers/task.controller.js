
import {pool} from "../db.js"

export const getTasks = async (req, res) => {

    const [result]= await pool.query("SELECT * FROM tasks ORDER BY createAt ASC")
   // console.log(result);
    res.json(result)
}

export const getTask = async (req, res) => {

    const [result]=await pool.query("SELECT * FROM tasks WHERE id=?",[req.params.id])
    //console.log(result[0]);
    if(result.length===0) return res.status(404).json({message:"Task not found"})
    res.json(result[0])
    
    
}


export const createTask = async (req, res) => {
    const {title,description}=req.body;
  const [result]=await  pool.query("INSERT INTO tasks (title,description) VALUES (?,?)",[title,description])
    res.json({
        id:result.insertId,
        title,description
    })
}


export const updateTask = async (req, res) => {
    const {title,description,done}=req.body;

   const [result]= await pool.query("UPDATE tasks SET title=?,description=?,done=? WHERE id=?",[title,description,done,req.params.id])
    console.log(result);
    res.send(result)
}

export const deleteTask = async (req, res) => {
   const {id}=req.params;
    const [result]= await pool.query("DELETE FROM tasks WHERE id=?",[id])
   console.log(result);
   if(result.affectedRows===0) return res.status(404).json({message:"Task not found"})  
   return res.sendStatus(204)

}

