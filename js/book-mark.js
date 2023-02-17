const google = document.querySelector(".google-logo img");
const naver = document.querySelector(".naver-logo img");
const github = document.querySelector(".github-logo img");
const youtube = document.querySelector(".youtube-logo img");

google.addEventListener("click", (e) => {
  window.location = "https://www.google.co.kr";
});

naver.addEventListener("click", (e) => {
  window.location = "https://www.naver.com/";
});

github.addEventListener("click", (e) => {
  window.location = "https://github.com/";
});

youtube.addEventListener("click", (e) => {
  window.location = "https://www.youtube.com/";
});
