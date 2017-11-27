function onErrorClickHandler() {
  getException();
}

function onSendLogsHandler() {
  sendLogs({message: 'this is test message', appId: 1202, appName: 'JS-LOGGLY'});
}

function getException() {
  raiseException();
}

