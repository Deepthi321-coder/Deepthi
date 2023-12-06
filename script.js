console.log("welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/mp3.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Aaradhana(worship song1)",filePath:"songs/mp3.mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Hosanna(worshipsong2)",filePath:"songs/8.mp3",coverPath:"covers/1.jpg"},
    {songName:"Enduko nanninthaga(worship3)",filePath:"songs/1.mp3",coverPath:"covers/2.jpg"},
    {songName:"Lekinchaleni(worship4)",filePath:"songs/2.mp3",coverPath:"covers/3.jpg"},
    {songName:"Jevanadini(worship5)",filePath:"songs/3.mp3",coverPath:"covers/4.jpg"},
    {songName:"Mevadhu-Marvadhu(worship6)",filePath:"songs/4.mp3",coverPath:"covers/abc.jpg"},
    {songName:"Naa Thandri(worship7)",filePath:"songs/5.mp3",coverPath:"covers/6.jpg"},
    {songName:"Veyi Kallatho(worship8)",filePath:"songs/6.mp3",coverPath:"covers/7.jpg"},
    
    
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
    //Handle play/pause click
    masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
    })
    //Listen to Events
    audioElement.addEventListener('timeupdate',()=>{
        //update seekbar
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        console.log(progress);
        myProgressBar.value=progress;
    })
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    })
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
        })
    }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.scr=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
 }
 else{
    songIndex+=1;
}
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})
