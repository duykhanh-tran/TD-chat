import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// authorization - xac minh user la ai 
export const protectedRoute = async (req, res , next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token){
            return res.status(401).json({
                message: "Khong tim thay access token"
            })
        }
        jwt.verify( token , process.env.ACCESS_TOKEN_SECRET , async ( err , decodedUser) => {
            if ( err ){
                console.error( err);
                return res.status(403).json({
                    message : "Access token khong hop le"
                });
            }
            const user = await User.findById( decodedUser.userId ).select('-hashedPassword').exec();
            if (!user){
                return res.status(404).json({
                    message : "User khong ton tai "
                });
            }
            req.user = user; // gan user vao req de su dung o cac middleware hoac controller sau
            next();
        });
    } catch (error) {
        console.error('Loi khi xac minh JWT trong authMiddleware', error);
        return res.status(500).json({
            message : "Loi he thong "
        })
    }
};