const shortenInput = document.querySelector("#input-url");
const submitButton = document.querySelector(".btn-submit");
const urlForm = document.querySelector("#url-form");
urlForm.addEventListener("submit", (event) => {
  const inputUrl = shortenInput.value.trim()
    if (!inputUrl.length) {
      event.preventDefault()
      return alert("請輸入URL!");
    }

});
