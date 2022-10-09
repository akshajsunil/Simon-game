var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = ""; 
var gamePattern = [];
var userSeq=[];
var currentLevel =0;
var level =0;
var aud = [new Audio("sounds/red.mp3"),new Audio("sounds/blue.mp3"),new Audio("sounds/green.mp3"),new Audio("sounds/yellow.mp3")];
var printStats = () =>{
    console.log("Game pattern : "+gamePattern);
    console.log("User input :"+ userSeq);
    console.log("Current level :"+ currentLevel);
    console.log("User Level : "+ level);
    console.log("heading: "+$('h1').text());
}

var checkAnswer= ()=> {
    var flag=0;
    


            for(var i=0;i<level;i++)
            {
                if(gamePattern[i]!=userSeq[i])
                    flag=1;
            }


            if(flag==0)
            {
            if(level==currentLevel)
            {
        setTimeout(()=>{
            nextSequence();
        },1000);
        userSeq=[];
        level=0;

    }
    }
    else{
        $('h1').text("U lose!");
    }
    
    
    

}
var nextSequence = ()=>{
    $('h1').text("Level "+currentLevel);
    currentLevel++;
    
    
        
    randomChosenColour = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColours[randomChosenColour]);
    $("#"+buttonColours[randomChosenColour]).toggleClass("pressed");
    
    setTimeout(() => { $("#"+buttonColours[randomChosenColour]).toggleClass("pressed");}, "100");
    
    playSound(buttonColours[randomChosenColour])
    printStats();
    
}




var playSound =(name) =>{
    var aud = new Audio("sounds/"+name+".mp3");
    aud.play();
}
// clicking animation and sounds done.

$("#"+buttonColours[0]).on("click",()=>{
    level++;
    $("#"+buttonColours[0]).toggleClass("pressed");
    
    setTimeout(() => { $("#"+buttonColours[0]).toggleClass("pressed");}, "100");
    userSeq.push(buttonColours[0]);
    playSound(buttonColours[0])
    printStats();
    checkAnswer(level);
    
    
    
})

$("#"+buttonColours[1]).on("click",()=>{
    level++;
    $("#"+buttonColours[1]).toggleClass("pressed");
    playSound(buttonColours[1])
    
    setTimeout(() => { $("#"+buttonColours[1]).toggleClass("pressed");}, "100");
    userSeq.push(buttonColours[1]);
    printStats();
    checkAnswer(level);
    
    
})
$("#"+buttonColours[2]).on("click",()=>{
    level++;
    $("#"+buttonColours[2]).toggleClass("pressed");
    playSound(buttonColours[2])
    
    setTimeout(() => { $("#"+buttonColours[2]).toggleClass("pressed");}, "100");
    userSeq.push(buttonColours[2]);
    printStats();
    checkAnswer(level);
    
   
})
$("#"+buttonColours[3]).on("click",()=>{
    level++;
    $("#"+buttonColours[3]).toggleClass("pressed");
    playSound(buttonColours[3])
    
    setTimeout(() => { $("#"+buttonColours[3]).toggleClass("pressed");}, "100");
    userSeq.push(buttonColours[3]);
    printStats();
    checkAnswer(level);
    
})

    
    $('html').on('keydown', (event) => {
        
        if(event.key=='a')
        { 
          nextSequence(); 
          

        
    }

    })
       
    




