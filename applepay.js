const isApplePayAvailable = Reepay.isApplePayAvailable();
const applePayButton = document.getElementById("apple-pay-button");
if (isApplePayAvailable) {
  applePayButton.style.background = "green";
} else {
  applePayButton.style.background = "red";
}
console.log("isApplePayAvailable:", isApplePayAvailable);
