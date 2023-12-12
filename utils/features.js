import jwt from "jsonwebtoken";

export const setCookie = (user, res, message, status=200) => {
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    
    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 15*60*1000,
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
    }).json({
        success: true,
        message: message
    })
}

export const userExistOrNot = (res, message) => {
    return res.status(404).json({
        success: false,
        message: message
    })
}