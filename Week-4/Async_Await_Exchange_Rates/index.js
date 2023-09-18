// import axios from 'axios';

const axios = require('axios');


async function getExchangeRate(currencyCode) { 
 try{
     const res =  await axios.get('https://api.exchangerate.host/latest');
     let rate = res.data.rates[currencyCode];
     console.log(rate.toFixed(4));
 }catch(err){
    throw err;
 }
 
  

}
getExchangeRate('USD')