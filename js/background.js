const images = [
  "0.jpeg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.setAttribute("id", "bg-img");
bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);
