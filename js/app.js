
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var magicNumber=0;
		var count=0;
		var guessCount=0;
		newGame();
		
    $('.new').click(function(){
       newGame();
    });
		
               
		function newGame(){
		    /*
		    	Here I am planning to do the following:
		        1.Generate a random number
		        2.Empty the guess list
		        3.Reset the count to zero   
		    */
		   //step 1:
		    magicNumber=Math.floor(Math.random() * 101);
		   //step 2:
		    $('#guessList').empty();
		   //step 3:
		    guessCount=0;
		    $('#count').html(guessCount);
		    $('#feedback').html('Make your Guess!');
		    console.log(magicNumber);
		    console.log("New Game");
		}

		$('#guessButton').click(function(event) {
		    event.preventDefault()
		    var guess = jQuery('#userGuess').val();
		    $('#count').html(++guessCount);
		    hotOrCold();
		    fillGuessList();
		    jQuery('#userGuess').val('');
		    console.log("Guess");
		    console.log(guess);
		    console.log(guessCount);
		});
    
		function hotOrCold(){    
				var guess =jQuery('#userGuess').val();
		    if ((+guess) === magicNumber){
		        $('#feedback').html("You Got It!");
		    } else if (Math.abs(guess- magicNumber) < 11 ){
		        $('#feedback').html("You're really hot");
		    } else if (Math.abs(guess- magicNumber) < 21 ){
		        $('#feedback').html("You're hot");
		    } else if (Math.abs(guess- magicNumber) < 31 ){
		        $('#feedback').html("You're warm");
		    } else if (Math.abs(guess- magicNumber) < 51 ){
		        $('#feedback').html("You're cold");
		    } else if (Math.abs(guess- magicNumber) > 50 ){
		        $('#feedback').html("You're freezing");
		    }
		}

		function fillGuessList(){
			var guess = jQuery('#userGuess').val();
		  if (guess != magicNumber) {
		     $('#guessList').append('<li>'+guess+'</li>');
		     console.log('added');
		 }
		}
});