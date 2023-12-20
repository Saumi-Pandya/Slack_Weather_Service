"use strict"

const modalView = {};

modalView.login = {
        "type": "modal",
        "callback_id": "connect_modal",
        "title": {
            "type": "plain_text",
            "text": "Get Started"
        },
        "submit": {
            "type": "plain_text",
            "text": "Submit"
        },
        "blocks": [
            {
                "type": "input",
                "block_id": "input-1",
                "element": {
                    "type": "plain_text_input",
                    "action_id": "input"
                },
                "label": {
                    "type": "plain_text",
                    "text": "Set your default Location"
                }
            }
        ]
};

module.exports = modalView;