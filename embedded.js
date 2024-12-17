var rp;
var urlParams = {};

window.onload = function () {
  init();

  setTimeout(() => {
    initSession();
  }, 500);
};

function init() {
  var urlQueries = window.location.href.split("?")[1];
  if (urlQueries) {
    urlQueries = urlQueries.split("&");
  }
  if (urlQueries) {
    urlQueries.forEach(function (query) {
      var param = query.split("=");
      urlParams[param[0]] = param[1] ? param[1] : true;
    });
  }

  let environment = urlParams["env"];
  let reepayScriptUrl = "https://checkout.reepay.com/checkout.js";
  if (environment === "staging") {
    reepayScriptUrl = "https://staging-checkout.reepay.com/checkout.js";
  }

  const script = document.createElement("script");
  script.src = reepayScriptUrl;
  script.async = true;
  script.onload = function () {
    rp = new Reepay.EmbeddedCheckout(null, { html_element: "rp_container" });

    rp.addEventHandler(Reepay.Event.Accept, function (data) {
      console.log("Success:", data);
    });
    rp.addEventHandler(Reepay.Event.Error, function (data) {
      console.log("Error:", data);
    });
    rp.addEventHandler(Reepay.Event.Close, function (data) {
      console.log("Close:", data);
    });
  };
  window.document.head.appendChild(script);
}

function initSession() {
  let session = urlParams["session"];
  if (session) {
    rp.show(session);

    Reepay.isGooglePayAvailable().then((isGooglePayAvailable) => {
      console.log("isGooglePayAvailable:", isGooglePayAvailable);
    });

    var isApplePayAvailable = Reepay.isApplePayAvailable();
    console.log("isApplePayAvailable:", isApplePayAvailable);
  }
}
