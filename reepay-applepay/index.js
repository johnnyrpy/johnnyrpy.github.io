const pubKey = "pub_27eb9904ab3f5e3c4f4ecb9a0ce788d5"; // Whatever

/**
 *  Apple Pay Recurring
 */
const builder = new ReepayApplePay.ApplePayBuilder(
  pubKey,
  "Frisbii Test Payment"
);

const buttonStyles = {
  style: "black",
  type: "buy",
  language: "en",
  height: "30px",
  width: "150px",
};

builder
  .setTransactionAmount(1)
  .setButtonHeight(buttonStyles.height)
  .setButtonWidth(buttonStyles.width)
  .setButtonStyle(buttonStyles.style)
  .setButtonType(buttonStyles.type)
  .setButtonLanguage(buttonStyles.language);

const applePayButtonRef = builder.createApplePayButton("apple-pay-button");

/**
 *  Apple Pay Recurring
 */
const recurringBuilder = new ReepayApplePay.ApplePayBuilder(
  pubKey,
  "Frisbii Test Recurring"
);

const recurringButtonStyles = {
  style: "black",
  type: "subscribe",
  language: "en",
  height: "30px",
  width: "150px",
};

const recurringPaymentRequest = {
  paymentDescription: "Frisbii Test Subscription",
  regularBilling: {
    label: "Frisbii Product - Yearly Subscription",
    amount: 1000,
    paymentTiming: "recurring",
    recurringPaymentIntervalUnit: "month",
    recurringPaymentIntervalCount: 6,
  },
  managementURL: "https://frisbii.com/",
};

recurringBuilder
  .setTransactionAmount(1)
  .setButtonHeight(recurringButtonStyles.height)
  .setButtonWidth(recurringButtonStyles.width)
  .setButtonStyle(recurringButtonStyles.style)
  .setButtonType(recurringButtonStyles.type)
  .setButtonLanguage(recurringButtonStyles.language)
  .setRecurringPaymentRequest(recurringPaymentRequest);

const applePayButtonRecurringRef = recurringBuilder.createApplePayButton(
  "apple-pay-recurring-button"
);
