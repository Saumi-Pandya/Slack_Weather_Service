"use strict";

const db = require('../../mongodb');
const callout = require('../../calloutService');
const views = require('../../views');

const modal = {};

modal.submit = async ({ ack, body, view, client }) => {
    await ack();
  
    // Extract the entered value from the modal submission
    const userId = body.user.id;
    const defaultCity = view.state.values['input-1']['input'].value;
    console.log(`Submitted value: ${defaultCity}`);

    const records = [{
        userId: userId,
        location: defaultCity
    }];

    await db.insertRecords(records);

    const data = await  callout.calloutService(defaultCity, '1');
    const errorOccured = data?.error != null ? true : false;

    const location = data?.location;
    const currentWeather = await data?.current;
    const updatedHomeView = errorOccured ? views.message.error(errorMessage) : views.home.update(location, currentWeather);

    const result = await client.views.publish({
        user_id: body.user.id,
        view: updatedHomeView
        // {
        //   type: 'home',
        //   blocks: [
        //     {
        //       type: 'section',
        //       block_id: 'section-1',
        //       text: {
        //         type: 'mrkdwn',
        //         text: 'Updated content after modal submission!',
        //       },
        //     },
        //   ],
        // },
      });
}

module.exports = modal;

