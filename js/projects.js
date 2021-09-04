const projects = document.querySelectorAll(".showcase-list")
const blogs = document.querySelectorAll(".blog")

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

const blogImages = [
    "css",
    "html"
]

let index = 0;
projects.forEach(project =>{
    let imageName = backgroundImages[index];
    let imageSource = "../images/project-images/" + imageName + ".png";
    project.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url(${imageSource})`;
    index++;
})

for(let i = 0; i < blogs.length; i++){
    let imageName = blogImages[i];
    let imageSource ="../images/blog-images/" + imageName + ".png";
    blogs[i].style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url(${imageSource})`;
}