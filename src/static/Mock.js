let http = require('http');
let mockserver = require('mockserver');

http.createServer(mockserver('./TestDataFake.js')).listen(9001);