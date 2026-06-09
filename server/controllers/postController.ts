import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware.js";
import { GoogleGenAI } from "@google/genai";

// generate post 
//POST/api/posts/generate

export const generatePost= async(req:AuthRequest, res:Response):Promise<void> =>{
  
}

// Get generations 
//GET/api/posts/generations

export const getGenerationt= async(req:AuthRequest, res:Response):Promise<void> =>{
    try{
        const {prompt,tone,generateImage}= req.body;
        const apiKey= process.env.GEMINI_API_KEY;
        if(!apiKey){
            res.status(400).json({message:"Gemini API key is missing.Please add it to your Server/.env file."});
            return;

        }
        const ai = new GoogleGenAI({apiKey});

    }catch(error){

    }
  
}

// Get post
//GET/api/posts

export const getPost= async(req:AuthRequest, res:Response):Promise<void> =>{
  
}

// Schedule post
//POST/api/posts

export const schedulePost= async(req:AuthRequest, res:Response):Promise<void> =>{
  
}
