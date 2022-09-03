///var age = prompt("what is your name?");
//console.log(age);
//document.getElementById("somename").innerHTML = age;
//alert('this is the name function')


function ageInDays(){
    var birthyear = prompt("what year were you born..nanba?");
    var ageInDayss =(2022 - birthyear) *365;
    var h6 = document.createElement('h6');
    var textAnswer = document.createTextNode('you are' + ageInDayss + 'days old nanba');
    h6.setAttribute('id','ageInDays');
    h6.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h6);
 

}
 function reset(){
    document.getElementById('ageInDays').remove()
 }

 //creating cat generator
  function catgenerator(){
    var image = document.createElement('img');
    var div = document.getElementById("cat-gen")
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small" ;
    div.appendChild(image);
    
  }
  

  //Rock paper  scissors
  function rpsGame(yourchoice) {

    console.log(yourchoice);
    console.log(yourchoice.src)
    var humanchoice,botchoice;
    humanchoice= yourchoice.id;
    botchoice=numbertochoice(randomtorpsint());
    console.log('computerchoice',botchoice);

    results = winner(humanchoice,botchoice);//[0,1] human "lost" | "bot won"
    console.log(results);
    message = finalmsg(results);//('message':'you won','color':'green')
    console.log(message);
    rpsfrontend(yourchoice.id,botchoice,message);
  }

  function randomtorpsint(){
    return Math.floor(Math.random() * 3);
  }

  function numbertochoice(number){
    return['rock','paper','scissor'][number];
  }
  function winner(yourchoice,computerchoice){
    var rpsDatabase ={
      'rock':{'scissor': 1,'rock': 0.5,'paper':0},
      'paper':{'rock':0.5,'paper':0,'scissor':1},
      'scissor':{'scissor':0,'rock':0.5,'paper':1},
    };
    var yourscore = rpsDatabase[yourchoice][computerchoice];
    var computerscore = rpsDatabase[computerchoice][yourchoice];
    return [yourscore,computerscore];
  }

  function finalmsg([yourscore,computerscore]){
    if (yourscore === 0) {
      return{'message':'you lost!','color':"red"};
     }
      else if(yourscore === 0.5){
        return{'message':'you tie!','color':"yellow"};

      } 
    else{
      return{'message':'you won!','color':"green"};

    }
  }

  function rpsfrontend(humanimagechoice,botimagechoice,finalmsg){
    var imageDatabase ={
      'rock':document.getElementById('rock').src,
      'paper':document.getElementById('paper').src,
      'scissor':document.getElementById('scissor').src
    }
 

 //lets remove all the images
 document.getElementById('rock').remove()
      document.getElementById('paper').remove()
      document.getElementById('scissor').remove()

      var humandiv = document.createElement('div');
      var botdiv =document.createElement('div');
      var messagediv =  document.createElement('div');

      humandiv.innerHTML ="<img src ='"+imageDatabase[humanimagechoice]+"'height = 150 width =150 style ='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
      messagediv.innerHTML ="<h1 style ='color:" + finalmsg['color'] +"; font-size:60px; padding:30px;'>"+finalmsg['message']+"</h1>"
      botdiv.innerHTML ="<img src ='"+imageDatabase[botimagechoice]+"'height = 150 width =150 style ='box-shadow: 0px 10px 50px rgba(243,50,243,1);'>"

      document.getElementById('flex-box-rps-1').appendChild(humandiv);
      document.getElementById('flex-box-rps-1').appendChild(messagediv);

      document.getElementById('flex-box-rps-1').appendChild(botdiv);


  }