import { MakeMobileMenu } from "./module/mobileMenu.js";

MakeMobileMenu();

document.querySelector("#formAsk").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const feetback = document.querySelector("#feetback");
  feetback.textContent = ` Добрый день, ${name}! Ваш отзыв успешно отправлен
    `;

});
