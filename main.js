/* dog = 0;
cat = 0;
cow = 0;
lion = 0; */

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ax0VIzYdE/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("animal").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

//        dog = document.getElementById('dog');
//        cat = document.getElementById('cat');
//        cow = document.getElementById('cow');
//        lion = document.getElementById('lion');
        img = document.getElementById('img');

        if (results[0].label == "Background Noise") {
            img.src = 'ear.jpg';
        }
        else if (results[0].label == "Barking Dog") {
            img.src = 'dog.jpg';
        }
        else if (results[0].label == "Meowing Cat") {
            img.src = 'cat.jpg';
        }
        else if (results[0].label == "Mooing Cow") {
            img.src = 'cow.png';
        }
        else {
            img.src = 'Lion.jpg';
        }
    }
}
