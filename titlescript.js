const flashlight = document.querySelector(".flashlight");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  flashlight.style.background = `
    radial-gradient(
      circle 160px at ${x}px ${y}px,
      rgba(255,255,255,0.2) 10%,
      rgba(255, 255, 255, 0.2) 35%,
      rgba(0,0,0,0.98) 100%
    )
  `;
});

function checkPassword() {
  const input = document
    .getElementById("passwordInput")
    .value
    .trim()
    .toLowerCase();

  const message = document.getElementById("message");

  const validPasswords = [
    "zummo",
    "galzerano",
    "schiavetto"
  ];

  if (validPasswords.includes(input)) {
    message.style.color = "#b8ffb8";
    message.textContent = "Access granted. Welcome back, Detective.";

    setTimeout(() => {
        window.location.href = "envelope.html";
    }, 2000);

  } else {
    const cuteMessages = [
      "nopeee, try again!",
      "The password fairy says that's not it",
      "Tiny mistake detected 🐭",
      "Are you even supposed to be here?",
      "Close? Maybe? Probably not",
      "Access Denied 🧏🏼‍♀️"
    ];

    const randomMessage =
      cuteMessages[Math.floor(Math.random() * cuteMessages.length)];

    message.style.color = "#ffd6d6";
    message.textContent = randomMessage;
  }
}