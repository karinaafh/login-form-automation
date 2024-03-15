const dotenv = require('dotenv');
dotenv.config();

class Environment {
    constructor() {
      this.ANDROID_APP_PACKAGE = process.env.CAPABILITIES_ANDROID_APP_PACKAGE;
      this.ANDROID_APP_PERMISSION = process.env.CAPABILITIES_ANDROID_APP_PERMISSION;
      this.VALID_USERNAME = process.env.VALID_USERNAME;
      this.VALID_PASSWORD = process.env.VALID_PASSWORD;
      this.INVALID_USERNAME = process.env.INVALID_USERNAME;
      this.INVALID_PASSWORD = process.env.INVALID_PASSWORD;
    }
  }
  
module.exports = new Environment();