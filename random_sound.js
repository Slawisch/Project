var songs = document.getElementsByName("Song")
var currentSound = 0;
var playerScore = 0;
var PressSong = 0;

function PlaySound()
{
   // var radionbuttons = document.getElementsByName("SongRB")
   // for (var i = 0; i < 3; i++)
   // {
   //     if(radionbuttons[i].checked)
   //     {
  //          songs[i].play()
   //     }
   //     else
   //     {
   //         songs[i].pause()        
   //     }
   // }
    currentSound = randomInteger(0,6);
    songs[currentSound].play();
    PressSong++;
}

function StopAllSongs() {
    for (var i = 0; i < songs.length; i++)
    {
        songs[i].pause()    
    }
}

function randomInteger(min, max)
 {    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
 }

 function writeScore()
 {
    var tempForWriteScore=document.getElementById("div_1");
    tempForWriteScore.innerHTML="Your score: " + playerScore;
 }

function cheakSound(numberSong)
{
    if (numberSong == currentSound)
    {
        playerScore++;
        writeScore();
        alert("Ти вгадав!");        
    }
    else if (PressSong == 0)
    {
        var tempForWriteScore=document.getElementById("div_1");
        tempForWriteScore.innerHTML="Press Play sound!";
        alert("Спочатку послухай, а потім угадуй");
    } 
    else
    {
        playerScore--;
        writeScore();
        alert("Try again!");
    }
    
}