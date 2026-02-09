import Register from "../modules/register.js";
import bcrypt from "bcryptjs";

const getRegisters = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const check = await Register.findOne({ email });

    if (check) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(password, salt);

 
    const registerInstance = new Register({
      email,
      password: hashedPassword,
    });

    const result = await registerInstance.save();

    return res.status(201).json({
      message: "User registered successfully",
      error: null,
      data: result,
    });

  } catch (error) {
    console.error("error caught:", error);
    return res.status(500).json({
      message: error.message,
      error: "failed",
    });
  }
};

const getNames = async (req, res) => {
  try {
    const users = await Register.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getRegisters, getNames };
