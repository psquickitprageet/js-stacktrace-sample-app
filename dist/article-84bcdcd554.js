function getRandomArbitrary(n,t){return Math.random()*(t-n)+n}function getRandomInt(n,t){return Math.floor(Math.random()*(t-n+1))+n}function guid(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function raiseException(){callundefinedfunction()}function sendLogs(n){_LTracker.push(n)}
function onErrorClickHandler(){getException()}function onSendLogsHandler(){sendLogs({message:"this is test message",appId:1202,appName:"JS-LOGGLY"})}function getException(){raiseException()}
var _LTracker=_LTracker||[];_LTracker.push({logglyKey:"89e8b8e9-439f-4be6-b5b2-269a9ebdfeaa",sendConsoleErrors:!0,tag:"loggly-jslogger,js-stacktrace"});
//# sourceMappingURL=maps/article-84bcdcd554.js.map