const progress = document.getElementById("progress")
let song = document.getElementById('song') , song2 =document.getElementById('song2');
const Next = document.getElementById('forWrad');
const Back =document.getElementById("backWrad");
let currentSong = song ;
let playPause = document.getElementById('playPause');
let curTimeWrap = document.getElementById('currentTime') , durTimeWrap = document.getElementById('durationTime');
let Title = document.getElementById("songTitle"), content = document.getElementById("songContent");
let Img = document.getElementById("toggleImg");
song.onloadedmetadata = function(){
    progress.max= currentSong.duration;
    progress.value = currentSong.currentTime;
}

Next.addEventListener("click",function toggleSong(){   //切換歌曲
    if(currentSong === song){
        song.pause();
        song.currentTime = 0;
        currentSong = song2;
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        Title.innerHTML = "Forest Lullaby";
        content.innerHTML = 'Lesfm';
        Img.src = "cover-2.png";
    }
    else{
        Title.innerHTML = "Lost in the City Lights";
        content.innerHTML = 'Cosmo Sheldrake';
        currentSong = song;
        song2.pause();
        song2.currentTime = 0;
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        Img.src = "cover-1.png";
    }
});

Back.addEventListener("click",function toggleSong(){   //切換歌曲
    if(currentSong === song){
        song.pause();
        song.currentTime = 0;
        currentSong = song2;
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        Title.innerHTML = "Forest Lullaby";
        content.innerHTML = 'Lesfm';
        Img.src = "cover-2.png";
    }
    else{
        Title.innerHTML = "Lost in the City Lights";
        content.innerHTML = 'Cosmo Sheldrake';
        currentSong = song;
        song2.pause();
        song2.currentTime = 0;
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        Img.src = "cover-1.png";
        
    }
});

playPause.addEventListener('click',()=>{  
    if(playPause.classList.contains("fa-pause")){
        currentSong.pause();
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    }
    else{
        currentSong.play();
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
    }
})

if(currentSong.play){
    //秒數轉換成分鐘
    setInterval(function(){
        progress.value = currentSong.currentTime;  //currentTime song現在的時間
        progress.max = currentSong.duration;
        curTimeWrap.innerHTML = parseInt(currentSong.currentTime);
        let durMin = Math.floor(currentSong.duration / 60)
            dursec = parseInt(currentSong.duration % 60 );
        let CurMin = Math.floor(currentSong.currentTime / 60)
            CurSec = parseInt(currentSong.currentTime % 60 );
        durTimeWrap.innerHTML = durMin + ':' + dursec ;
        curTimeWrap.innerHTML = CurMin + ':' + CurSec ;
        
    },500)
};

progress.onchange = function (){
    //html controlbar 轉換成input range 
    currentSong.play();
    currentSong.currentTime = progress.value;  //順序為 歌曲播放後song.currentTime 會等於 progress.value
    currentSong.duration = progress.max;
    
};