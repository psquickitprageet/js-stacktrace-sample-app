function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function raiseException() {
  callundefinedfunction();
}

function sendLogs(message) {
  _LTracker.push(message);
}

function onErrorClickHandler() {
  getException();
}

function onSendLogsHandler() {
  sendLogs({message:'this is test message', appId: 1202, appName: 'JS-LOGGLY'});
}

function getException() {
  raiseException();
}


var _LTracker = _LTracker || [];
_LTracker.push({
  'logglyKey': '89e8b8e9-439f-4be6-b5b2-269a9ebdfeaa',
  'sendConsoleErrors': true,
  'tag': 'loggly-jslogger,js-stacktrace'
});
