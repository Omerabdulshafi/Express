import Names from "../modules/user.js";

const getNames = async(req, res)=>{
    try{
        const name = await Names.find();
        res.json(name)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const CreateNames = async(req, res)=>{
    try{
        const  {firstName,lastName,email,message} = req.body;
        const name = new Names({firstName,lastName,email,message});
        await name.save();
        res.send(name)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getName = async(req, res)=>{
    try{
        const id = req.params.id;
        const name = await Names.findById(id);
        res.json(name)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteName = async(req, res)=>{
    try{
        const id = req.params.id;
        const name = await Names.findByIdAndDelete(id);
        res.json(name)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateName = async(req, res)=>{
    try{
        const id = req.params.id;
        const name = await Names.findByIdAndUpdate(id, req.body);
        res.json(name)
    }
    catch(error){
        res.status(500).json({message:error.message})
    } 
}
export {getNames,CreateNames,getName,deleteName,updateName};