export const authMe = async (req, res) => {
   try {
        const user = req.user; 
        return  res.status(200).json({
            message : "Lay thong tin user thanh cong",
            user 
        });
   } catch (error) {
        console.error('Loi trong userController authMe', error);
        return res.status(500).json({
            message : "Loi he thong "
        });
   }
};
export const test = async (req, res) => {
    return res.sendStatus(204);
};