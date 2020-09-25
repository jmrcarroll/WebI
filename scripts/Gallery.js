function styles(url, id){
    document.getElementById("stylesheet").href = url;
    var themes = document.getElementsByClassName("theme");
    for(i = 0; i<themes.length; i++){
        if(themes[i].classList.contains("active")){
            themes[i].classList.remove("active");
        }
         themes[id].classList.add("active");
    }
   
}

function enlarge(id){
    var images = document.getElementsByClassName("small")
    
    
    document.getElementById("LImg").src = images[id].src;
    document.getElementById("LImg").alt = images[id].alt;
}