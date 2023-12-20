"use strict"

const views = require('../../views');
const db = require('../../mongodb');
const callout = require('../../calloutService');

const home = {};

home.open = async({ client, event, context, body }) => {
    console.log('Home open event triggered ');
    const userId = event.user;
    const userInfo = await client.users.info({
        user: userId,
    });
    //console.log('user details ' + JSON.stringify(userInfo));

    let homeBlock = views.home.connect;
    console.log('userId ', userId);
    const records = await db.readRecords(userId);
    console.log('records :- ', records);
    if (records?.length > 0) {
        console.log('inside logic handling');
        const data = await  callout.calloutService(records[0].location, '1');
        const errorOccured = data?.error != null ? true : false;

        const location = data?.location;
        const currentWeather = await data?.current;
        //console.log('location ', location, currentWeather);
        homeBlock = views.home.update(location, currentWeather);
    } 
    
    const result = await client.views.publish({
        user_id: userId,
        view: homeBlock
    });
};

module.exports = home;