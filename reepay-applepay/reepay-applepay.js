const pubKey = "pub_d597082034986d9a22a3f1ad4eca7740"; // Test public key

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
