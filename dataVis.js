console.log('hello world');

d3.csv('cbAnalysis2.csv', function(err, cbAnalysis){
	if(err){ console.log('There was an error:', err)}
	console.log('got data', cbAnalysis)

	var methodologies = Object.keys(cbAnalysis[0]);
	var currentMethod = methodologies[2];// 'Online Diary + Wearable GPS'//
	var ratingsDiv = d3.select('.ratings')

	var currentCat = 'Trip Characteristic Data'

	var MethodCategories = {
		
		'Trip Characteristic Data': {
			color: 'red',
			methods : [
				'Origin Location',
				'Destination Location',
				'Trip Purpose',
				'Mode',
				'Parking Info',
				'Toll Info',
				'Route Info',
				'Departure Time',
				'Arrival Time',
				'Travel Party'
			]
		},
		
		'Demographic Data':{
			color: 'blue',
			methods: ['Demographic Data']
		},

		'Survey Instrument Characteristics':{
			color: 'yellow'
			methods: [
				'Respondent Burden Reduction',
				'Data Collection',
				'Customizable',
				'Language',
				'Presentation',
				'Branching Logic',
				'Data Processing',
				'Equity',
				'Commercial Availability',
				'Survey Instrument Lifecycle'
			]
		},

		'Admin Characteristics': {
			color: 'green',
			methods: [
				'Administrative Features',
				'Respondent Recruitment',
				'Historical Comparison',
			]
		}
	}	
	// catData = data.filter(function(d){
	// 	return d.Name === currentCat
	// })

	ratingsDiv
		.append('div')
		.html('<h4>' + currentMethod + '</h4>')


	ratingsDiv
		.selectAll('.ratingRow')
		.data(cbAnalysis)
		.enter()
		.append('div')
			.html(function(d){

				var output =  '<div class="row">'
					output +='<div class="ratingName col-xs-6">' + d.Name + '</div>'
					output += '<div class="ratingCircles col-xs-6">'
					output += drawTenCircles('chartreuse', d[currentMethod]) + ' </div></div>'
				
				return output

			})

	function drawTenCircles(color, rating){
		var width = ((rating/100) * 250);
		var output = '<svg width=' + width + ' height=22 >'
		for(var i = 1; i <= 10; i++){
			output += '<circle fill=' + color + ' r=8 cx=' + ((25 * i) - 12) + ' cy='+ (11) + '></circle>'
		}
		output += '</svg>'
		return output
	}

});

