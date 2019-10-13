// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

const CONFIG = {
  headless: false,
  api: {
    host: '0.0.0.0',
    port: 3000,
    timeout: 900000 // 15 minutes
  },
  ui: {
    ssl: false,
    host: 'localhost', // localhost
    port: 3000,
    path: '/'
  },
  adapter: 'mongodb'
  //adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
