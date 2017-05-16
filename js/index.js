
$(document).ready (function(){
  var x;
   
 var question = $("#xoro").text("Would you like to be X or O?");
  var arr = ["first","second","third","fourth","fifth", "sixth", "seventh", "eighth", "ninth"];
  
 
  
  $("#X").on("click", function(){
document.getElementById("playground").style.display = "none";
document.getElementById("play").style.display = "block";
x = true;
    
  });
  $("#O").on("click", function(){
document.getElementById("playground").style.display = "none";
document.getElementById("play").style.display = "block";
x = false;
  });
  
 $("td").on("click", function(){
  
  if (x){
  
        
    var clicked = this.id;
        
     
    var index = arr.indexOf(clicked);
    
    if (index > -1) {
       
       $(this).html("<h3>X</h3>");
        
    arr.splice(index, 1);
     
      
  }
    var rand = arr[Math.floor(Math.random() * arr.length)];
  var id = document.getElementById(rand);
  var ind = arr.indexOf(rand);
    
      if (ind > -1) {
         
      $(id).html("<h3>O</h3>");
      arr.splice(ind,1);
        
      }
 
   
     
    }
   if(!x){
     let clicked = this.id;
        
     
    let index = arr.indexOf(clicked);
   
     if (index > -1) {
       
       $(this).html("<h3>O</h3>");
        
    arr.splice(index, 1);
     
      
  }
      let rand = arr[Math.floor(Math.random() * arr.length)];
  let id = document.getElementById(rand);
  let ind = arr.indexOf(rand);
  if (ind > -1) {
         
      $(id).html("<h3>X</h3>");
      arr.splice(ind,1);
    
      }
   }
  var one = document.getElementById("first").innerHTML;
  var two = document.getElementById("second").innerHTML;
  var three = document.getElementById("third").innerHTML;
  var four = document.getElementById("fourth").innerHTML;
  var five = document.getElementById("fifth").innerHTML;
  var six = document.getElementById("sixth").innerHTML;
  var seven = document.getElementById("seventh").innerHTML;
  var eight = document.getElementById("eighth").innerHTML;
  var nine = document.getElementById("ninth").innerHTML;
   console.log(one);
   var ex = "<h3>X</h3>";
   var ou = "<h3>O</h3>";
   /*if ((x) && (one === two && two === three || four === five && five === six || seven === eight && eight === nine || one === four )){
   
      alert("You won!");
    }*/
   if ((x) && (one ===ex && two ===ex && three ===ex || four === ex && five === ex && six === ex || seven === ex && eight === ex && nine === ex || one ===ex && four ===ex && seven ===ex || two === ex && five === ex && eight === ex || three === ex && six === ex && nine === ex || one === ex && five === ex && nine && ex || three === ex && five === ex && seven === ex)){
    $("#over").html("<h2>You won!!!</h2>" + "<button type=button id = restart>Restart game?</button>");
    $("button").on ("click", function(){
     document.location.reload(true);
    });
   }
   if ((x) && (one ===ou && two ===ou && three ===ou || four === ou && five === ou && six === ou || seven === ou && eight === ou && nine === ou || one ===ou && four ===ou && seven ===ou || two === ou && five === ou && eight === ou || three === ou && six === ou && nine === ou || one === ou && five === ou && nine && ou || three === ou && five === ou && seven === ou)){
    $("#over").html("<h2>You lost...</h2>" + "<button type=button>Restart game?</button>");
    $("button").on ("click", function(){
     document.location.reload(true);
    });
   }
   if ((!x) && (one ===ou && two ===ou && three ===ou || four === ou && five === ou && six === ou || seven === ou && eight === ou && nine === ou || one ===ou && four ===ou && seven ===ou || two === ou && five === ou && eight === ou || three === ou && six === ou && nine === ou || one === ou && five === ou && nine && ou || three === ou && five === ou && seven === ou)){
    $("#over").html("<h2>You won!!!</h2>" + "<button type=button>Restart game?</button>");
    $("button").on ("click", function(){
     document.location.reload(true);
    });
   }
   if ((!x) && (one ===ex && two ===ex && three ===ex || four === ex && five === ex && six === ex || seven === ex && eight === ex && nine === ex || one ===ex && four ===ex && seven ===ex || two === ex && five === ex && eight === ex || three === ex && six === ex && nine === ex || one === ex && five === ex && nine && ex || three === ex && five === ex && seven === ex)){
    $("#over").html("<h2>You lost...</h2>" + "<button type=button>Restart game?</button>");
    $("button").on ("click", function(){
     document.location.reload(true);
    });
   }
  });
 
   
          
});