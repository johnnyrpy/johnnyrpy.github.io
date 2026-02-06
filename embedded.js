var rp;
var urlParams = {};

var sessionTypeRadios;
var sessionIdInput;
var showButton;

var sessionId;
var sessionType;

var isWrongSessionType = false;

window.onload = async function () {
  await init();
  await initSession();
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

  let environment = urlParams["env"] ?? "production";
  console.log("Environment:", environment);
  let reepayScriptUrl = "https://checkout.reepay.com/checkout.js";
  if (environment === "staging" || environment === "s") {
    reepayScriptUrl = "https://staging-checkout.reepay.com/checkout.js";
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = reepayScriptUrl;
    script.async = true;
    script.onload = function () {
      console.log("Reepay script loaded successfully");
      detectAppleGoogle();
      resolve();
    };
    script.onerror = function () {
      console.error("Failed to load Reepay script");
      reject(new Error("Failed to load Reepay script"));
    };
    window.document.head.appendChild(script);
  });
}

function initSession() {
  let sessionId = urlParams["id"];
  if (sessionId) {
    sessionIdInput.value = sessionId;
    showButton.click();
  }

  const container = document.getElementById("rp_container");
  console.log("Iframe src:", container?.childNodes[0]?.src);
}

function detectAppleGoogle() {
  Reepay.isGooglePayAvailable().then((isGooglePayAvailable) => {
    console.log("isGooglePayAvailable:", isGooglePayAvailable);
  });

  Reepay.isApplePaySupported().then((isApplePaySupported) => {
    console.log("isApplePaySupported:", isApplePaySupported);
  });

  var isApplePayAvailable = Reepay.isApplePayAvailable();
  console.log("isApplePayAvailable:", isApplePayAvailable);
}

document.addEventListener("DOMContentLoaded", () => {
  sessionTypeRadios = document.querySelectorAll('input[name="type"]');
  if (sessionTypeRadios.length > 0) {
    sessionTypeRadios[0].checked = true;
  }
  sessionTypeRadios.forEach((radio) => {
    radio.addEventListener("change", async (event) => {
      event.preventDefault();
      const selectedSessionType = document.querySelector(
        'input[name="type"]:checked'
      );
      sessionType = selectedSessionType.value;
      await initCheckout();
    });
  });

  sessionIdInput = document.getElementById("sessionId");
  sessionIdInput.addEventListener("input", () => {
    sessionIdInput.value = sessionIdInput.value.replace(/\s+/g, "");
  });
  sessionIdInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      showButton.click();
      sessionIdInput.blur();
    }
  });

  showButton = document.getElementById("showButton");
  showButton.addEventListener("click", async () => {
    sessionId = document.getElementById("sessionId")?.value?.trim();
    sessionType = document.querySelector('input[name="type"]:checked')?.value;

    if (sessionId.trim() === "") {
      console.error("Session ID is required");
    } else {
      await initCheckout();
    }
  });
});

async function initCheckout() {
  rp?.destroy();

  if (sessionType === "subscription") {
    rp = new Reepay.EmbeddedSubscription(sessionId, {
      html_element: "rp_container",
      domainName: "johnnyrpy.github.io",
    });
  } else {
    rp = new Reepay.EmbeddedCheckout(sessionId, {
      html_element: "rp_container",
      domainName: "johnnyrpy.github.io",
    });
  }

  rp.addEventHandler(Reepay.Event.Accept, function (data) {
    console.log("Success:", data);
  });
  rp.addEventHandler(Reepay.Event.Error, function (data) {
    console.log("Error:", data);

    if (
      !isWrongSessionType &&
      data.error === "error.session.invalidSessionType"
    ) {
      isWrongSessionType = true;
      changeSessionType();
    }
  });
  rp.addEventHandler(Reepay.Event.Close, function (data) {
    console.log("Close:", data);
  });

  let url = new URL(window.location.href);
  if (url.searchParams.has("id")) {
    url.searchParams.delete("id");
  }
  url.searchParams.append("id", sessionId);
  window.history.pushState({}, "", url);
}

function changeSessionType() {
  let selectedRadio;
  sessionTypeRadios.forEach((radio) => {
    if (radio.checked) {
      selectedRadio = radio;
    }
  });

  if (selectedRadio) {
    const currentIndex = Array.from(sessionTypeRadios).indexOf(selectedRadio);
    const nextIndex = (currentIndex + 1) % sessionTypeRadios.length;
    sessionTypeRadios[nextIndex].checked = true;
  } else {
    sessionTypeRadios[0].checked = true;
  }
  showButton.click();
}
