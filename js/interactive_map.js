$(document).ready(function(){
	//when the form changes 
	$('#mapForm').change(function(){
		//create variable to hold slected
		var selectedContinent = $('#mapForm option:selected').val();

		//if statement to test all
		if(selectedContinent == "ALL"){
			//show all the dots
			$('a.dot').slideDown(1000);
		}else{
			//show dots that are on the slected continent
			//hide the others
			$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
	})

	//dot code
	//when a dot is clicked
	$('a.dot').click(function(){
		//remove selected class from dots
		$('a.dot').removeClass("selected");

		//add selected class to the clicked anchor
		$(this).addClass("selected");

		//create variable to hold path of matching div
		var country = ".country_detail#" + $(this).attr("country");

		//variable to hold html
		var htmlCode = $(country).html();

		//animate the container - fade in and fade out
		$(".detail_container").fadeOut(500, function(){
			//thecontainer is hidden
			//put html in the container and it back up
			$(".detail_container .country_detail").html(htmlCode);
			$(".detail_container").fadeIn(500);
		})
	})
})
