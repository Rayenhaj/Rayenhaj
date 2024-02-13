let thesong = document.getElementById("song")
let logo = document.getElementById("logo")
logo.onclick = function(){
    if(thesong.paused){
        thesong.play()
    }
    else{
        thesong.pause()
    }

}
