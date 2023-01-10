//Depnedemcies and Initialization
const express = require('express');
const Router = express.Router();
//Depnedemcies and Initialization


//Start Block Accessing The Library Files And Routes
let { sendEmail } = require('../controllers/SendEmailManagementController')
//End Block Accessing The Library Files And Routes


//Start Block For Accessing The Controlers
Router.post('/sendEmail',sendEmail)
//End Block For Accessing The Controlers


module.exports = Router;