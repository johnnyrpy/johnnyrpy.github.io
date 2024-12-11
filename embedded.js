var rp;
var urlParams = {};

window.onload = function () {
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

  setTimeout(() => {
    initSession();
  }, 1000);
};

function initSession() {
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

  if (urlParams["session"]) {
    rp.show(urlParams["session"]);

    Reepay.isGooglePayAvailable().then((isGooglePayAvailable) => {
      console.log("isGooglePayAvailable:", isGooglePayAvailable);
    });

    var isApplePayAvailable = Reepay.isApplePayAvailable();
    console.log("isApplePayAvailable:", isApplePayAvailable);
  }
}
