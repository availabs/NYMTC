var RadarMethods = [
		'Origin Location',
		'Destination Location',
		'Trip Purpose',
		'Mode',
		'Parking Info',
		'Toll Info',
		'Route Info',
		'Departure Time',
		'Arrival Time',
		'Travel Party',
		'Respondent Burden Reduction',
		'Customizable',
		'Data Processing',
		'Equity',
		'Commercial Availability',
		'Survey Instrument Lifecycle',
		'Administrative Features',
		'Respondent Recruitment',
		'Historical Comparison',
		'Demographic Data'
	]

	var methodCategories = {
		'Trip Characteristic Data': {
			color: '#3faecd',
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
			color: '#89bf3f',
			methods: ['Demographic Data']
		},

		'Survey Instrument Characteristics':{
			color: '#e65e38',
			methods: [
				'Respondent Burden Reduction',
				'Customizable',
				'Data Processing',
				'Equity',
				'Commercial Availability',
				'Survey Instrument Lifecycle'
			]
		},

		'Admin Characteristics': {
			color: '#e9c659',
			methods: [
				'Administrative Features',
				'Respondent Recruitment',
				'Historical Comparison',
			]
		}
	}