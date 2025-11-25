// determine if Apple Pay payment sheet is available
const isApplePayAvailable = Reepay.isApplePayAvailable();
const applePayButton = document.getElementById("apple-pay-button");
if (isApplePayAvailable) {
  applePayButton.innerHTML = "Apple Pay - Available";
  applePayButton.style.background = "green";
} else {
  applePayButton.innerHTML = "Apple Pay - Unavailable";
  applePayButton.style.background = "red";
}
console.log("isApplePayAvailable:", isApplePayAvailable);

// determine if Apple Pay is supported (e.g. QR code approach)
Reepay.isApplePaySupported().then((isSupported) => {
  const applePaySupportedButton = document.getElementById(
    "apple-pay-supported-button"
  );
  if (isSupported) {
    applePaySupportedButton.innerHTML = "Apple Pay - Supported";
    applePaySupportedButton.style.background = "green";
  } else {
    applePaySupportedButton.innerHTML = "Apple Pay - Not Supported";
    applePaySupportedButton.style.background = "red";
  }
  console.log("isApplePaySupported:", isSupported);
});
