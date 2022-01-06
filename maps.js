
const mapsArray = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.7091476188775!2d35.52054125098353!3d32.79997048087159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3e5899217f9d%3A0xcca69145e7d37fa2!2sSaifan%2C%20Tverya!5e0!3m2!1sen!2sil!4v1640677994842!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.744587611912!2d35.205523950967596!3d32.10318798108812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d27aa4f0daaf7%3A0x2ca995d16b10cd02!2sAriel%20University!5e0!3m2!1sen!2sil!4v1640632783751!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.155737415251!2d34.808061250963064!3d31.90236568115275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b6fd87bd57e1%3A0xc24b0c493e57305b!2sEliezer%20Ben-Yehuda%2C%20Rehovot!5e0!3m2!1sen!2sil!4v1640678042092!5m2!1sen!2sil"];

const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
const mapIFrame = document.querySelector(".gallery-maps");
mapIFrame.src = mapsArray[1];
let currentlySelected = 1;
prevButton.addEventListener("click", function () {
  if (currentlySelected >= 0) {
    currentlySelected--;
    mapIFrame.src = mapsArray[currentlySelected];
    nextButton.style.display = "inline-block";
  }
  if (currentlySelected === 0) {
    prevButton.style.display = "none";
  }
});

nextButton.addEventListener("click", function () {
  if (currentlySelected <= 1) {
    currentlySelected++; 
    mapIFrame.src = mapsArray[currentlySelected];
    prevButton.style.display = "inline-block";
  }
  if (currentlySelected === 2) {
    nextButton.style.display = "none";
  }
});



const codingLanguages = ["HTML", "CSS", "JavaScript", "payton", "c++"];
let web = document.getElementById("website");
for (let i = 0; i < codingLanguages.length; i++) {
  web.textContent += codingLanguages.slice(0, -1).join(', ') + ' and ' + codingLanguages.slice(-1)
  break

}