function drawMethodCategory(methodCategory, currentMethod, cbAnalysis) {
		
	var ratingsDiv = d3.select('.ratings')
	var methodDiv = ratingsDiv
		.append('div')
			
	methodDiv
		.append('div')
		.html('<h4>' + methodCategory + '</h4>')

	var currentMethodCategory = methodCategories[methodCategory]
	var currentCbData = cbAnalysis.filter(function(d){
		return currentMethodCategory.methods.indexOf(d.Name) >= 0
	})

	methodDiv
		.selectAll('.ratingRow')
		.data(currentCbData)
		.enter()
	.append('div')
		.html(function(d){

			var output =  '<div class="row">'
				output += '<div class="ratingName col-xs-6">' + d.Name + '</div>'
				output += '<div class="ratingCircles col-xs-6">'
				output += drawTenCircles(currentMethodCategory.color, d[currentMethod]) 
				output += '</div></div>'
		
			return output

		})
}

function drawTenCircles(color, rating){
	var width = ((rating/100) * 250);
	var output = '<svg width=' + width + ' height=22 >'
	for(var i = 1; i <= 10; i++){
		output += '<circle fill=' + color + ' r=8 cx=' + ((25 * i) - 12) + ' cy='+ (11) + '></circle>'
	}
	output += '</svg>'
	return output
}