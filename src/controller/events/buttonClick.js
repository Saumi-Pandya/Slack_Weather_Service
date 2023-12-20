"use strict"

const views = require('../../views');
const buttonClick = {};

buttonClick.connect = async ({ body, action, ack, context, client }) => {
    await ack();
    // console.log('Button has been clicked');
    // console.log(`context is ${JSON.stringify(context)}`);
    // console.log(`action is ${JSON.stringify(action)}`);
    // console.log(`body is ${JSON.stringify(body)}`);
    try {
        const result = await client.views.open({
          trigger_id: body.trigger_id,
          view: views.modal.login
        //   {
        //         "type": "modal",
        //         "callback_id": "connect_modal",
        //         "title": {
        //             "type": "plain_text",
        //             "text": "Get Started"
        //         },
        //         "submit": {
        //             "type": "plain_text",
        //             "text": "Submit"
        //         },
        //         "blocks": [
        //             {
        //                 "type": "input",
        //                 "block_id": "input-1",
        //                 "element": {
        //                     "type": "plain_text_input",
        //                     "action_id": "input"
        //                 },
        //                 "label": {
        //                     "type": "plain_text",
        //                     "text": "Set your default Location"
        //                 }
        //             }
        //         ]
        //     }
        });
      } catch (error) {
        console.error(error);
      }
};

buttonClick.updateLocation = async ({ ack, body, client, action, context}) => {
    await ack();
    console.log('upodate location detected');
}

module.exports = buttonClick;