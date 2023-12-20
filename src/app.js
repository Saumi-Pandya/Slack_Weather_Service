"use strict"

const {App, LogLevel} = require('@slack/bolt');
require('dotenv').config();



const app = new App({
    token : process.env.SLACK_BOT_TOKEN,
    signingSecret : process.env.SLACK_SIGNING_SECRET,
    clientId: process.env.SLACK_CLIENT_ID,
    appToken: process.env.SLACK_APP_TOKEN,
    convoStore: false,
    socketMode: false,
    logLevel: LogLevel.DEBUG
});

module.exports = { app };