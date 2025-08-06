const pubKey = "pub_27eb9904ab3f5e3c4f4ecb9a0ce788d5"; // Whatever

const buttonStyles = {
  style: "black",
  type: "buy",
  language: "en",
  height: "30px",
  width: "150px",
};

const builder = new ReepayApplePay.ApplePayBuilder(pubKey, "Frisbii Test");
builder
  .setTransactionAmount(1)
  .setButtonHeight(buttonStyles.height)
  .setButtonWidth(buttonStyles.width)
  .setButtonStyle(buttonStyles.style)
  .setButtonType(buttonStyles.type)
  .setButtonLanguage(buttonStyles.language);

const applePayButtonRef = builder.createApplePayButton("apple-pay-button");
