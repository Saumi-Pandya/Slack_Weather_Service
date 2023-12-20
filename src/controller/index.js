"use strict"

const events = require(`./events`);
const { app } = require(`../app`);

//events
app.event('app_home_opened', events.home.open);

//actions
app.action('city_input', events.input.entered);
app.action('user_sign_up', events.buttonClick.connect);
app.action('action_update_location', events.buttonClick.updateLocation);

//commands
app.command('/provide-update', events.update.sendUpdate);

//modals
app.view('connect_modal', events.modal.submit); 

