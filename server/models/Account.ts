import { TokenExpiredError } from "jsonwebtoken";
import mongoose from "mongoose";
import { access } from "node:fs";

const accountSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    platform:{type:String,enum:["twitter","linkedin","facebook","instagram","facebook_page","linkedin_page","instagram_bussiness"],required:true},
    handle:{type:String, required:true},
     zernioAccountld:{type: String},
    accessToken:{type: String},
    refreshToken:{type: String},
    tokenExpiresAt: {type:Date},
    status:{type:String,enum:["connected","disconnected"],default:"connected"},
    avatarUrl:{type:String},
},{timestamps:true})

export const Account = mongoose.model('Account',accountSchema)
