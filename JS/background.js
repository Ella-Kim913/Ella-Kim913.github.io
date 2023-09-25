const images = [
    "0.jpg",
    "1.png",
    "2.jpg"
];


const chosenImage = images[Math.floor(Math.random() * images.length)]

const backgroundImage = document.createElement('img')

backgroundImage.src = `img/${chosenImage}`

document.body.background = backgroundImage.src

document.body.style = "center fixed"