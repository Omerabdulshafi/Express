import register from "../modules/register";
import bcrypt from "bcryptjs";

const getRegisters = async(req, res)=>{
    try{
        const data=req.body;
        const salt = await bcrypt.genSalt(7);

        const check = await register.findOne({ email: data.email });
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
        res.send(data);
        if(check){
            res.status(409).json({message:"User already exists",});
        } else {
            let registerInstance = new register({
                email: data.email,
                password: data.password
            });
           let result = await registerInstance.save();
            res.status(200).json({message:"User registered successfully",
                error: null,
                data : result
                
            });
        }}
    catch(error){
        console.log("error catched,",error);
        
        res.status(500).json({message:error.message,
            error:"failed"
        })
    }
}
export default getRegisters;