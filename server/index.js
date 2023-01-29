const express = require('express')
const axios = require('axios')
const cors = require("cors");
const asyncHandler = require('express-async-handler');
require('dotenv').config()
const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;

const KEY = process.env.KEY

const ID = process.env.ID


const app = express()

const port = process.env.PORT || 8080;

const corsOrigin = {
  origin:'http://localhost:3000', //or whatever port your frontend is using
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOrigin));

// To query the GeoLite2 web service, you must set the optional `host` parameter
const client = new WebServiceClient(ID, KEY, {host: 'geolite.info'});


const getIpAddress = asyncHandler(async(req, res) => {
  //Pass 'ip' as params to set the IP ADDRESS and return the data
  const ip = req.params.ip;
  //Client.city to work as axios.get 
  client.city(ip)
    .then(response => {
      const location = response.location; 
      res.send({
        longitude: location.longitude, 
        latitude: location.longitude,
      });
    })
    .catch(error => {
      res.send(error)
    })
  })

//Pass 'ip' as params to set the IP ADDRESS and return the data
app.get('/city/:ip', getIpAddress)
  
app.listen(port, () => {
  console.log(`We are on planet ${port}!`)
})
