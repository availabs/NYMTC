//console.log('hello world');

d3.csv('data/cbAnalysis3.csv', function(err, cbAnalysis){
	if(err){ console.log('There was an error:', err)}
	console.log('got data', cbAnalysis)
	

	// Get Method Data, set current survey method
	var methodologies = Object.keys(cbAnalysis[0]);
	//console.log('methodologies',methodologies)
	var currentMethod = methodologies[4]


	writePageText()
	drawRadarChart(cbAnalysis,currentMethod)
		
	Object.keys(methodCategories).forEach(function(name){
		drawMethodCategory(name,currentMethod,cbAnalysis);
	})

	function writePageText(){
		
		// write title
		d3.select('.title').html('<h2>' + currentMethod.toUpperCase() + '</h2>' )
		
		// write description
		var descriptions = cbAnalysis.filter(function(d){
			return d.Name === "Description"
		})[0]

		d3.select('.descriptionText').html(descriptions[currentMethod])
		
		// write outlook
		var outlooks = cbAnalysis.filter(function(d){
			return d.Name === "Outlook"
		})[0]

		d3.select('.outlookText').html(outlooks[currentMethod])

		//write score
		var scores = cbAnalysis.filter(function(d){
			return d.Name === "Total Score"
		})[0]
		d3.select('.scoreText').html( Math.round(scores[currentMethod]) )

		//write ranking
		var ranked = Object.keys(scores)
		.filter(function (d) {
			return d !== 'Name'
		})
		.sort(function (a,b) {
			return (+scores[b]) - (+scores[a])
		})

		console.log('ranks', ranked , ranked.map(function(d){ return scores[d]}) )

		var currentRank = ranked.indexOf(currentMethod) +1

		d3.select('.rankText').html(currentRank)


		// write pros
		var pros = cbAnalysis.filter(function(d){
			return d.Name === "Pros"
		})[0]

		var proData = pros[currentMethod].split('|')
		
		d3.select('.proList')
		.selectAll('.pro')
		.data(proData)
		.enter()
		.append('li')
		.html(function(d){ return d })


		// write cons
		var cons = cbAnalysis.filter(function(d){
			return d.Name === "Cons"
		})[0]

		var conData = cons[currentMethod].split('|')
		
		d3.select('.conList')
		.selectAll('.con')
		.data(conData)
		.enter()
		.append('li')
		.html(function(d){ return d })

	}
	

});

