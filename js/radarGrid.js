d3.csv('data/cbAnalysis3.csv', function(err, cbAnalysis){
	if(err){ console.log('There was an error:', err)}
	console.log('got data', cbAnalysis)

	var methodologies = Object.keys(cbAnalysis[0]);
	var scores = cbAnalysis.filter(function(d){
		return d.Name === "Total Score"
	})[0]
	
	//write ranking
	var ranked = Object.keys(scores)
	.filter(function (d) {
		return d !== 'Name'
	})
	.sort(function (a,b) {
		return (+scores[b]) - (+scores[a])
	})
	
	ranked.forEach(function(method,index){
		drawSingleRadar(method,index)
	})

	function drawSingleRadar(currentMethod,index){
		var main = d3.select('.gridMain')
		var className =  'radarGrid num_'+ index
		className += index === 0 ? ' big' : ''
		var radarGrid = main.append('div').attr('class',className)
		radarGrid.append('h5').html(currentMethod)

		var options = {
			w: index === 0 ? 455 : 200,
			h: index === 0 ? 455 : 200, 
			drawLabels: index === 0,
			target: '.num_'+index
		}
		drawRadarChart(cbAnalysis, currentMethod, options)
	}

});