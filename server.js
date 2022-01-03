const express = require('express');
const bodyParser = require('body-parser');
const { save_user_information ,get_total_amount } = require('./models/server_db')
const path = require('path');

const publicPath = path.join(__dirname, './public');


const app = express();

app.use(bodyParser.json());
app.use(express.static(publicPath));


app.post('/', async (req,res) => {

    var email = req.body.email;
    var  amount = req.body.amount;
    
     if(amount <= 1)
     {
         return_info = {};

         return_info.error = true;
         return_info.message = "the amount should be greater than 1";
         return res.send(return_info); 
     }
     var result = await save_user_information({"amount": amount , "email": email});
    res.send(result);

});

app.get('/gettotalamount', async (req,res) => {
result = await get_total_amount();
res.send(result);

});

app.listen(3000,()=>{
    console.log('server listening on port 3000');
});