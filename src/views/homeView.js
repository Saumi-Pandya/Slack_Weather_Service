"use strict"

const homeView = {};

homeView.connect = {
	"type": "home",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Hey ! I can help you with some weather updates*"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "To get started, connect to Weather Service"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Connect",
					"emoji": true
				},
				"value": "click_me_123",
				"action_id": "user_sign_up"
			}
		}
	]
};

homeView.update = (location, currentWeather) => {
	const view = {
		"type": "home",
		"blocks": [
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": "*Hey ! Here are some updates for you*"
				}
			},
			{
				"type": "divider"
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": `*Your current location is ${location.name}*`
				}
			},
			{
				"type": "section",
				"text": {
					"type": "mrkdwn",
					"text": `Current temperature is ${currentWeather.temp_c} C*`
				}
			},
			{
				"type": "divider"
			},
			{
				"type": "actions",
				"elements": [
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Update Location",
							"emoji": true
						},
						"value": "button_update_location",
						"action_id": "action_update_location"
					},
					{
						"type": "button",
						"text": {
							"type": "plain_text",
							"text": "Send Alert",
							"emoji": true
						},
						"value": "button_send_alert",
						"action_id": "action_send_alert"
					}
				]
			}
		]
	}

	return view;
}

module.exports = homeView;