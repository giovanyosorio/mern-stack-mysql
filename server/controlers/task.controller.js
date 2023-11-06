
import {pool} from "../db.js"

export const getTasks = async (req, res) => {
try {
    const [result]= await pool.query("SELECT * FROM tasks ORDER BY createAt ASC")
    // console.log(result);
     res.json(result)
} catch (error) {
        return res.status(500).json({message:"Something went wrong"})
}

}

export const getTask = async (req, res) => {

    try {
        const [result]=await pool.query("SELECT * FROM tasks WHERE id=?",[req.params.id])
        //console.log(result[0]);
        
        res.json(result[0])
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

    
}


export const createTask = async (req, res) => {
    try {
        const {title,description}=req.body;
        const [result]=await  pool.query("INSERT INTO tasks (title,description) VALUES (?,?)",[title,description])
          res.json({
              id:result.insertId,
              title,description
          })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}


export const updateTask = async (req, res) => {
    try {
        const {title,description,done}=req.body;

        const [result]= await pool.query("UPDATE tasks SET title=?,description=?,done=? WHERE id=?",[title,description,done,req.params.id])
         console.log(result);
         res.send(result)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id}=req.params;
        const [result]= await pool.query("DELETE FROM tasks WHERE id=?",[id])
       console.log(result);
       if(result.affectedRows===0) return res.status(404).json({message:"Task not found"})  
       return res.sendStatus(204)
    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

