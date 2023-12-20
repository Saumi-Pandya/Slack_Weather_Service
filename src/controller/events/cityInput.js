"use strict"

const callout = require('../../calloutService');
const views = require('../../views');
const cityInput = {};
const errorMessage = "No matching location found or API is down";

cityInput.entered = async ( {body, ack, say} ) => {
    await ack();
    console.log(`Action received`);
    const cityParam = body.actions[0].value;
    console.log('callout ', callout);
    const data = await  callout.calloutService(cityParam, '1');
    const errorOccured = data?.error != null ? true : false;

    const location = await data?.location;
    const currentWeather = await data?.current
    const messageView = errorOccured ? views.message.error(errorMessage) : views.message.current(location, currentWeather);

    await say(messageView);
};

module.exports = cityInput;