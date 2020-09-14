var songs = document.getElementsByName("Song")
var currentSound = randomInteger(0,6);
var playerScore = 0;
var PressSong = 0;

function PlaySound(typeOfSound)
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
   if (typeOfSound == 0)
   {
        currentSound = randomInteger(0,6);
   }
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

var arrOfNote = ['Do','Re','Mi','Fa','Sol','Lya','Si'];

function cheakSound(numberSong)
{
    
    if (PressSong == 0)
    {
        var tempForWriteScore=document.getElementById("div_1");
        tempForWriteScore.innerHTML="Press Play sound!";
        alert("Спочатку послухай, а потім угадуй");
    } 
    else if (numberSong == currentSound)
    {
        playerScore++;
        writeScore();
        alert("Ти вгадав!");    
        PlaySound(0);    
    }
    else
    {
        playerScore--;
        writeScore();
        alert("No, it was "+arrOfNote[currentSound]+" Try again!");
        PlaySound(0);
    }
    
}