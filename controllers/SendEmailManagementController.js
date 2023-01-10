const { senEmail } = require('../miscellaneousFiles/SendClientEmail');

const sendEmail = async (req,res) => {
    try {
        const body = req.body;
        const emailResponse = await senEmail(body);
        res.json({
            message:emailResponse.Message,
            data:true,
            body:emailResponse
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:error.message,
            data:false,
            body:null
        })
    }
}

module.exports = {
    sendEmail
}