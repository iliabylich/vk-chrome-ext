var application = 'com.vk.control';
var port = null;

log('chrome.runtime.connectNative')

port = chrome.runtime.connectNative(application);

port.onMessage.addListener(function(message) {
  // console.log("Got message from server", message);

  if (message.command) {
    runCommand(message.command, function(reply) {
      // console.log('Replying', reply);
      port.postMessage(reply);
    });
  }
});

port.onDisconnect.addListener(function(e) {
  log('unexpected disconnect');

  port = null;
});

function log(message) {
  console.log(message);
}

function runCommand(command, reply) {
  chrome.tabs.query({ url: '*://vk.com/*' }, function(tabs) {
    var tab = tabs[0];
    // console.log(tab);

    if (tab === undefined) {
      reply('VK is not opened');
      return true;
    }

    chrome.tabs.executeScript(tab.id, { file: `player/${command}.js` }, function(response) {
      response = response[0];


      reply(response);
      return true;
    });
  });
}
