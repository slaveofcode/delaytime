'use strict';

const Promise = require('bluebird');


const makeDelay = (ms) => new Promise((res) => setTimeout(res, ms));


module.exports = makeDelay;

