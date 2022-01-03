const db =require('../db.js');

save_user_information = (data) => new Promise( (resolve, reject) => {

    db.query("INSERT INTO lottery_information SET ?",data, function (err, result, fields) {
     if(err){
         reject('could not insert into lottery information');
     }
     resolve('Succesful')
    
    });
})

get_total_amount = (data) => new Promise( (resolve, reject) => {

    db.query("SELECT SUM(amount) as total_amount FROM lottery_information",null, function (err, result, fields) {
     if(err){
         reject('could not get total amount');
     }
     resolve(result)
    
    });
})






module.exports = {
    save_user_information,
    get_total_amount
}