"use strict"

const messageView = {

    current: (location, currentWeather) => {
        return ({
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*Hey ! I am here to help you with weather updates* :ghost: \n Current Location is ${location.name} \n Current temperature is ${currentWeather.temp_c} C`
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "dispatch_action": true,
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "city_input"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Any specific city?",
                        "emoji": true
                    }
                }
            ]
        })
    },

    forecast: (location, days) => {
        return {}
    },
    
    error: (errorMessage) => {
        return (
            {
                "blocks": [
                    {
                        "type": "section",
                        "text": {
                            "type": "plain_text",
                            "text": `${errorMessage}`,
                            "emoji": true
                        }
                    },
                    {
                        "type": "divider"
                    }
                ]
            }
        );
    }
};

module.exports = messageView;
