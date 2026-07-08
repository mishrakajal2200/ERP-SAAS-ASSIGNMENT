import { getDashboard } from "../services/dashboardService.js";

export const dashboard = async (req,res,next)=>{

    try{
       console.log("User:", req.user);
        const data = await getDashboard(req.user.companyId);

        res.status(200).json({
            success:true,
            data
        });

    }catch (error) {
    console.log(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack,
    });
    next(error);
}

}