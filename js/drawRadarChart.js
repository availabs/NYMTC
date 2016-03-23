function drawRadarChart(data,currentMethod){
	console.log('Im drawing a chart')
	var w = 500,
		h = 500;

	var RadarData = Object.keys(methodCategories).map(function(mcat){
		return data
		.filter(function(d){
			return RadarMethods.indexOf(d.Name) >= 0
		})
		.map(function(d){
			if(methodCategories[mcat].methods.indexOf(d.Name) >= 0){
				return {axis: d.Name, value: +d[currentMethod]/100}
			}
			return {axis: d.Name, value: 0}
		})
	})
	

	var colorscale = d3.scale.category10().range(['#3faecd', '#89bf3f','#e65e38', '#e9c659']);

	
	//Options for the Radar chart, other than default
	var mycfg = {
	  w: w,
	  h: h,
	  maxValue: 1,
	  levels: 10,
	  ExtraWidthX: 150,
	  color:colorscale,
	  opacityArea: 0.6	
	}

	//Call function to draw the Radar chart
	//Will expect that data is in %'s
	RadarChart.draw(".radar", RadarData, mycfg);
}