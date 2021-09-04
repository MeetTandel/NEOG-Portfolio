const list = document.querySelectorAll(".showcase-list")

const backgroundImages = [
    "profit-and-loss",
    "palindrome-birthday",
    "fun-with-triangles",
    "lucky-birthday",
    "cash-register",
    "popular-anime",
    "emoji-translate",
    "yoda-translate",
    "Minion-talk",
    "cli-app",
    "cli-app"
]

let index = 0;

console.log(list)
// list[0].style.backgroundImage

list.forEach(l =>{
    let background = backgroundImages[index];
    let imageSource = "../images/project-images/" + background + ".png";
    console.log(imageSource) 
    index++;
    l.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url(${imageSource})`;
})