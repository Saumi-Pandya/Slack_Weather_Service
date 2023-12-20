"use strict"

const callouts = require('../../calloutService');
const views = require('../../views');
const calloutService = require('../../calloutService/callout');

const update = {};

update.sendUpdate = async ({ body, client, logger, command, ack, respond, say }) => {
    await ack();
    console.log(calloutService);
    const data = await calloutService('Kanpur', '1');
    console.log('weather data :- ', data);
    const location = await data.location;
    const currentWeather = await data.current
    const messageView = views.message.current(location, currentWeather);

    await say(messageView
            // {
            //     "blocks": [
            //         {
            //             "type": "section",
            //             "text": {
            //                 "type": "mrkdwn",
            //                 "text": `*Hey ! I am here to help you with weather updates* :ghost: \n Current Location is ${location.name} \n Current temperature is ${currentWeather.temp_c} C`
            //             }
            //         }
            //     ]
            // }
    );
};

module.exports = update;