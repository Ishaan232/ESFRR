camera=document.getElementById("camera");
Webcam.attach("#camera");
Webcam.set({
height:350,
 image_format:'png',
 png_quality:90,
 width:300
})
function Capture(){
    Webcam.snap(function(a){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+a+'"/>';
    });
}
console.log("ml5.version",ml5.version);
dav=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/u2qdCS1Ho/model.json',ftbc)
function ftbc(){
    console.log("modelloaded")
}
function idk(){
    sc=document.getElementById("selfie");
    dav.classify(sc,adfn);
}
function adfn(error,result){
    if(error)
    {console.log(error);
    }
    else{console.log(result);
    document.getElementById("identification").innerHTML=result[0].label;
    document.getElementById("Accuracy").innerHTML=Math.floor(result[0].confidence*100)+"%";
}
}
