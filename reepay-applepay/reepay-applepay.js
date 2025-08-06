const pubKey = "pub_f90368e9f280319877ebf1db6fc467aa"; // Whatever

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
