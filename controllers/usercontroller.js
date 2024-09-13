const users=require('../users.json');
function getAllUsers(req,res){
    try{
        res.json(users)
    }
    catch(err){

    }
}
module.exports={
    getAllUsers
}