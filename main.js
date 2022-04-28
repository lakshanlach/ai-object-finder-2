function preload(){

}

function setup() {
    canvas = createCanvas(400, 300)
    canvas.center()

    video = createCapture(VIDEO)
    video.size(400, 300)
    video.position(485 , 285)

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
    objectname = document.getElementById("object").value
}

function modelLoaded() {
    console.log("modelloaded")
    status = true
}

function draw() {
    image(video, 0, 0, 380, 380)
}