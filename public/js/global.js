
/* global ConversationPanel: true, PayloadPanel: true*/
/* eslint no-unused-vars: "off" */

// Other JS files required to be loaded first: apis.js, conversation.js, payload.js
(function() {
  // Initialize all modules
  ConversationPanel.init();
  PayloadPanel.init();
  var debugging_param = location.search.split('debugging=')[1];
  if (!(debugging_param === "true")) {
    var payloadcolumn = document.getElementById("payload-column");
    var toggleButton = document.getElementById("view-change-button");
    toggleButton.style.display = payloadcolumn.style.display = "none";
  }
  
})();
