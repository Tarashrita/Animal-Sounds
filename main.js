function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vo1OqcDJ7/model.json',modelReady)
};
function modelReady() {
classifier.classify(gotResults)
};

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+ 1;
        random_number_g = Math.floor(Math.random() * 255)+ 1;
        random_number_b = Math.floor(Math.random() * 255)+ 1;
    
        document.getElementById("result_label").innerHTML = "I can hear-" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy-" + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        img1 = document.getElementById('EAR.png');
        img2 = document.getElementById('Birb.jpg');
        img3 = document.getElementById('CAT.jpg');
        img4 = document.getElementById('DOG.jpg');
    
        if(result[0].label == "Barking") {
            img1.src ='EAR.png';
            img2.src ='Birb.jpg';
            img3.src ='CAT.jpg';
            img4.src ='DOG.GIF'; 
        }    if(result[0].label == "meowing") {
            img1.src ='EAR.png';
            img2.src ='Birb.jpg';
            img3.src ='CAT.GIF';
            img4.src ='DOG.jpg'; 
        }    if(result[0].label == "chriping") {
            img1.src ='EAR.png';
            img2.src ='BIRB.gif';
            img3.src ='CAT.jpg';
            img4.src ='DOG.jpg'; 
        }else {
            img1.src ='EAR.gif';
            img2.src ='Birb.jpg';
            img3.src ='CAT.jpg';
            img4.src ='DOG.jpg'; 
        }  
    }
    }