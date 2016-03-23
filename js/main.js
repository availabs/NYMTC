//console.log('hello world');

d3.csv('data/cbAnalysis2.csv', function(err, cbAnalysis){
	if(err){ console.log('There was an error:', err)}
	//console.log('got data', cbAnalysis)
	
	// Get Method Data, set current survey method
	var methodologies = Object.keys(cbAnalysis[0]);
	//console.log('methodologies',methodologies)
	var currentMethod = methodologies[11];
	d3.select('.title').html('<h2>' + currentMethod + '</h2>' )

	drawRadarChart(cbAnalysis,currentMethod)
		
	Object.keys(methodCategories).forEach(function(name){
		drawMethodCategory(name,currentMethod,cbAnalysis);
	})
	
	

});

