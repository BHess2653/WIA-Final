//create some variables
var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale =0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

//creat document ready function
$(document).ready(function(){
	//setting global variables
	window.chartHeight = Number($(".chart-area").height());
	window.barWidth = $(".chart-area .chart-bar").width();
	window.highestYlabel = Number($(".chart-y-axis p").first().html());
	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
	window.chartScale = chartHeightArea/window.highestYlabel;
	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));
	positionBars();
});

function positionBars(){
	//create function to position each bar
	$(".chart-area .chart-bar").each(function(index){
		var barPosition = (window.barWidth * index) + (window.barSpacing * index) + window.barSpacing;

		$(this).css("left", barPosition + "px");

		//add text to each bar on x-axis
		$(this).html("<p>"+$(this).attr("bar-value")+"</p>");

		//x-axis
		$('.chart-x-axis').append('<p style="left:'+(barPosition - (window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

		//relative height of the bars
		var barValue = Number($(this).attr("bar-value"));

		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue/window.highestYlabel;
		}

	});
	animateChart();
}

function animateChart(){
	//grab each bar then animate it
	$(".chart-area .chart-bar").each(function(index){
		//height relative to the chart height
		var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;

		//create a variable for delay
		var newDelay = 125 * index;

		//animate the bar
		$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
			$(this).children("p").delay(500).fadeIn(250);

		})
	})
}
