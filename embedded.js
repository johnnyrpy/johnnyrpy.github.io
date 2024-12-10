var rp = new Reepay.EmbeddedCheckout(null, { html_element: "rp_container" }); // No session id given

rp.addEventHandler(Reepay.Event.Accept, function (data) {
  console.log("Success:", data);
});

rp.addEventHandler(Reepay.Event.Error, function (data) {
  console.log("Error:", data);
});

rp.addEventHandler(Reepay.Event.Close, function (data) {
  console.log("Close:", data);
});

rp.show("cs_00bfe691e9194265446ee9ee0ce6ebfa");
