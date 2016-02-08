"use strict"

const dotenv = require('dotenv')
let cfg = {}

if(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'){
	dotenv.config({path: '.env'})
}else{
  dotenv.config({path: '.env.test', silent: true})
}

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID
cfg.authToken = process.env.TWILIO_AUTH_TOKEN
cfg.sendingNumber = process.env.TWILIO_NUMBER
cfg.siteToMonitor = process.env.SITE_TO_MONITOR

var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber]
var isConfigured = requiredConfig.every(function(configValue){return !!configValue})

if (!isConfigured){
	throw new Error("TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.")
}

module.exports = cfg