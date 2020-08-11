





document.getElementById("button1").addEventListener("click", function(){
    
    document.getElementById("box").style.transition = "all 2s";   

    document.getElementById("box").style.height = "250px";

    document.getElementById("box").style.width = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.transition = "all 2s"
    
    document.getElementById("box").style.background = "blue";
});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.transition = "all 2s"
    
    document.getElementById("box").style.opacity = "0.4";
});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.transition = "all 2s"
    
    document.getElementById("box").style.height = "150px";

    document.getElementById("box").style.width = "150px";

    document.getElementById("box").style.background = "orange";

    document.getElementById("box").style.opacity = "1.0";

    document.getElementById("box").style.borderRadius = "0px";
});

document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("box").style.transition = "all 2s"
    
    document.getElementById("box").style.borderRadius = "100px"; 

});

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.transition = "all 2s"
    
    document.getElementById("box").style.borderRadius = "0px"; 

});