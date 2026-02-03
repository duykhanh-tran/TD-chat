import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Session from '../models/Session.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { console } from 'inspector';

const ACCESS_TOKEN_TTL = '30s';
const REFRESH_TOKEN_TTL = 14 * 24 *60 *60 *1000; // 14 ngay

// Đăng nhập 
export const signUp = async (req , res) => {
    try {
        const{ username , password , email , firstName , lastName } = req.body;
        if( !username || !password || !email || !firstName || !lastName ){
            return res.status(400).json({ 
                message : "Khong the thieu username , password , email , firstName va lastName"
            });
        }
        // Kiem tra xem Username da ton tai chua 
        const duplicate = await User.findOne({username});

        if (duplicate){
            return res.status(409).json({ message : "Username da ton tai "});
        }
        // ma hoa password 
        const hashedPassword = await bcrypt.hash(password, 10 );

        // tao user moi 
        await User.create({
            username,
            hashedPassword,
            email ,
            displayName : `${firstName} ${lastName}`
        })
        // return 
        return res.sendStatus(204);

    } catch (error) {
        console.error('Loi khi goi signUp', error);
        return res.status(500).json({
            message : "Loi he thong "
        })
    }
};
// Đăng kí 
export const signIn = async (req, res) => {
    try {
        // Lay inputs 
        const { username , password } = req.body;
        if ( !username || !password ){
            return res.status(400).json({
                message : "Khong the thieu username hoac password"
            });
        }
        // Lay hashedPassword trong db de so sanh voi password input 
        const user = await User.findOne({ username });
        if ( !user ){
             return res.status(401).json({
                message : "Sai username hoac password"
            });
        }
        // kiem tra password
        const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message : "Sai username hoac password"
            });
        }
        // Neu khop , tao accessToken voi JWT 
        const accessToken = jwt.sign(
            { "userId": user._id },process.env.ACCESS_TOKEN_SECRET,{ expiresIn: ACCESS_TOKEN_TTL }
        );
        // tao refresh Token
        const refreshToken = crypto.randomBytes(64).toString('hex');
        // tao session moi de luu refresh token
        await Session.create({
            userId : user._id,
            refreshToken ,
            expiresAt : new Date ( Date.now() + REFRESH_TOKEN_TTL )
        });
        // tra refresh token ve trong cookie
        res.cookie('refreshToken', refreshToken , {
            httpOnly : true ,
            secure : false ,
            sameSite: 'Lax',
            maxAge : REFRESH_TOKEN_TTL,
        });

        // tra access token ve trong res 
         return res.status(200).json({
            message : `User ${username} dang nhap thanh cong`,
            accessToken
        });
    } catch (error) {
        console.error('Loi khi goi signIn', error);
        return res.status(500).json({
            message : "Loi he thong "
        })
    }
};
// Đăng xuất
export const signOut = async (req, res) => {
    try {
        const token = req.cookies.refreshToken;
        
        if (token) {
            // Xóa trong Database
            await Session.deleteOne({ refreshToken: token });
            
            // Xóa Cookie ở Browser (Cần option giống hệt lúc tạo)
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: false, // Localhost phải là false
                sameSite: 'Lax',
            });
        }
        
        // Sửa sendStatus(204) thành status(200) để gửi được JSON
        return res.status(200).json({
            message: "Đăng xuất thành công"
        });

    } catch (error) {
        console.error('Lỗi khi gọi signOut:', error);
        return res.status(500).json({
            message: "Lỗi hệ thống"
        });
    }
};

export const refreshToken = async (req, res) => {
    try {
        // lay refresh token tu cookie
        const token = req.cookies?.refreshToken;
        if (!token){
            return res.status(401).json({ message : "Token khong ton tai"});
        }
        // so sanh refresh token voi db
        const session = await Session.findOne({ refreshToken : token });
        if (!session){
            return res.status(403).json({ message : "Token khong hop le hoac da het han " });
        }
        // kiem tra xem het han chua
        if ( session.expiresAt < new Date() ){
            return res.status(403).json({ message : "Token da het han " });
        }
        // tao access token moi
        const accessToken = jwt.sign({
            userId: session.userId
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_TTL });
        // return 
        return res.status(200).json({accessToken});
    } catch (error) {
        console.error('Loi khi goi refreshToken:', error);
        return res.status(500).json({ message: "Loi he thong" });
    }
};
