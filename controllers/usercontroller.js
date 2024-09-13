const users=require('../users.json');
function getAllUsers(req,res){
    try{
        res.json(users)
    }
    catch(err){

    }
}

function getuser(req,res){
    try{
        let id=parsInt(req.params.id);
        let user=users.find((user)=>user.id===id);
        res.json(user)
    }
    catch(err){
        console.log(err)
    }
}
module.exports={
    getAllUsers,
    getuser
}