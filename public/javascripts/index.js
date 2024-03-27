const shortenInput = document.querySelector("#input-url");
const submitButton = document.querySelector(".btn-submit");
const urlForm = document.querySelector("#url-form");

//避免輸入欄為空就送出
urlForm.addEventListener("submit", (event) => {
  const inputUrl = shortenInput.value.trim()
    if (!inputUrl.length) {
      event.preventDefault()
      return alert("請輸入URL!");
    }

});

//複製按鈕
function copyUrl() {
  const short_URL = document.querySelector("#short-url");
  navigator.clipboard
    .writeText(short_URL.innerText)
    .then(() => alert("copied"))
    .catch((error) => console.log(error));
}