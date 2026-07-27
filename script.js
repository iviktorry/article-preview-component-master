const shareBtn = document.getElementById("share-button");
const shareBtnWindow = document.getElementById("share-button-window");
const shareWindow = document.getElementById("share-window");
const authorBlock = document.getElementById("author");

shareBtn.addEventListener("click", () => {
  shareWindow.classList.toggle("is-clicked");
  shareBtn.classList.toggle("is-clicked");
  authorBlock.classList.toggle("is-clicked");
  console.log("ff");
});
shareBtnWindow.addEventListener("click", () => {
  shareWindow.classList.toggle("is-clicked");
  shareBtn.classList.toggle("is-clicked");
  authorBlock.classList.toggle("is-clicked");
  console.log("ll");
});
