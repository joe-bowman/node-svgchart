var nodeChart = require("../../lib/node-svgchart")
,fs   = require("fs");



nodeChart
.require(["lib/amcharts.js"])
.on("svg", function(e) {
	fs.writeFile("svg/" + e.job + ".svg", e.svg);
})
.on("image", function(e) {
	fs.writeFile("png/" + e.job + ".png", e.buffer);
})
.setSize(600, 400)
.setup(function(e, callback) {
	var chart;

	var chartData = [{
		year: 2005,
		income: 23.5
	}, {
		year: 2006,
		income: 26.2
	}, {
		year: 2007,
		income: 30.1
	}, {
		year: 2008,
		income: 29.5
	}, {
		year: 2009,
		income: 24.6
	}];

	var amchart;
	// SERIAL CHART
	amchart = new this.AmCharts.AmSerialChart();
	amchart.dataProvider = chartData;
	amchart.categoryField = "year";
	// this single line makes the chart a bar chart, 
	// try to set it to false - your bars will turn to columns                
	amchart.rotate = true;
	// the following two lines makes chart 3D
	amchart.depth3D = 20;
	amchart.angle = 30;

	// AXES
	// Category
	var categoryAxis = amchart.categoryAxis;
	categoryAxis.gridPosition = "start";
	categoryAxis.axisColor = "#DADADA";
	categoryAxis.fillAlpha = 1;
	categoryAxis.gridAlpha = 0;
	categoryAxis.fillColor = "#FAFAFA";

	// value
	var valueAxis = new this.AmCharts.ValueAxis();
	valueAxis.axisColor = "#DADADA";
	valueAxis.title = "Income in millions, USD";
	valueAxis.gridAlpha = 0.1;
	amchart.addValueAxis(valueAxis);

	// GRAPH
	var graph = new this.AmCharts.AmGraph();
	graph.title = "Income";
	graph.valueField = "income";
	graph.type = "column";
	graph.balloonText = "Income in [[category]]:[[value]]";
	graph.lineAlpha = 0;
	graph.fillColors = "#bf1c25";
	graph.fillAlphas = 1;
	amchart.addGraph(graph);

	// WRITE
	amchart.write("chart");
	callback();
})
.create("bar", {width: 600})
.setup(function(e, callback) {
	var ch;
	var chartData = [{
		year: 2005,
		income: 23.5,
		expenses: 18.1
	}, {
		year: 2006,
		income: 26.2,
		expenses: 22.8
	}, {
		year: 2007,
		income: 30.1,
		expenses: 23.9
	}, {
		year: 2008,
		income: 29.5,
		expenses: 25.1
	}, {
		year: 2009,
		income: 24.6,
		expenses: 25.0
	}];

	// SERIAL CHART  
	ch = new this.AmCharts.AmSerialChart();
	ch.dataProvider = chartData;
	ch.categoryField = "year";

	// AXES
	// category
	var categoryAxis = ch.categoryAxis;
	categoryAxis.gridPosition = "start";

	// value
	var valueAxis = new this.AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.tickLength = 0;
	ch.addValueAxis(valueAxis);
	
	// GRAPHS
	// column graph
	var graph1 = new this.AmCharts.AmGraph();
	graph1.type = "column";
	graph1.title = "Income";
	graph1.valueField = "income";
	graph1.lineAlpha = 0;
	graph1.fillAlphas = 1;
	ch.addGraph(graph1);

	// line
	var graph2 = new this.AmCharts.AmGraph();
	graph2.type = "line";
	graph2.title = "Expenses";
	graph2.valueField = "expenses";
	graph2.lineThickness = 2;
	graph2.bullet = "round";
	ch.addGraph(graph2);

	// LEGEND                
	var legend = new this.AmCharts.AmLegend();
	//ch.addLegend(legend);
	// WRITE
	ch.write("chart");

	callback();
})
.create("mixed", {width: 600})
.setup(function(e, callback) {
	var chart;

	var dataString = "2012-02-13,126.68,129.78,125.63,129.40\n2012-02-12,130.70,131.00,123.62,124.86\n2012-02-11,128.01,129.98,127.20,129.45\n2012-02-08,122.08,125.70,121.60,125.48\n2012-02-07,119.97,124.78,117.27,121.24\n2012-02-06,130.83,131.92,121.77,122.00\n2012-02-05,130.43,134.00,128.90,129.36\n2012-02-04,134.21,135.90,131.42,131.65\n2012-02-01,136.24,136.59,132.18,133.75\n2012-01-31,129.45,136.65,129.40,135.36\n2012-01-30,131.37,135.45,130.00,132.18\n2012-01-29,131.15,132.79,129.05,131.54\n2012-01-28,128.16,133.20,126.45,130.01\n2012-01-25,138.99,139.09,129.61,130.01\n2012-01-24,139.99,140.70,132.01,135.60\n2012-01-23,136.19,140.00,126.14,139.07\n2012-01-22,148.06,159.98,146.00,155.64\n2012-01-18,161.71,165.75,159.61,161.36\n2012-01-17,161.51,165.36,158.42,160.89\n2012-01-16,165.23,169.01,156.70,159.64\n2012-01-15,177.72,179.22,164.66,169.04\n2012-01-14,177.52,179.42,175.17,178.78\n2012-01-11,176.00,177.85,170.00,172.69\n2012-01-10,177.58,181.00,175.41,178.02\n2012-01-09,171.30,179.50,168.30,179.40\n2012-01-08,180.14,182.46,170.80,171.25\n2012-01-07,181.25,183.60,170.23,177.64\n2012-01-04,191.45,193.00,178.89,180.05\n2012-01-03,195.41,197.39,192.69,194.93\n2012-01-02,199.27,200.26,192.55,194.84\n2011-12-31,199.50,200.50,197.75,198.08\n2011-12-28,200.59,201.56,196.88,199.83\n2011-12-27,198.95,202.96,197.80,198.57\n2011-12-26,199.01,200.96,196.82,198.95\n2011-12-24,195.03,199.33,194.79,198.80\n2011-12-21,190.12,193.91,189.89,193.91\n2011-12-20,185.43,187.83,183.33,187.21\n2011-12-19,182.98,184.64,180.90,183.12\n2011-12-18,186.52,187.33,178.60,182.98\n2011-12-17,190.72,192.65,182.98,184.40\n2011-12-14,190.37,193.20,189.54,190.39\n2011-12-13,190.19,192.12,187.82,191.83\n2011-12-12,193.44,194.48,185.76,190.86\n2011-12-11,194.75,196.83,187.39,188.54\n2011-12-10,193.59,195.66,192.69,194.21\n2011-12-07,190.54,194.99,188.04,194.30\n2011-12-06,186.19,190.10,186.12,189.95\n2011-12-05,182.89,186.00,182.41,185.50\n2011-12-04,177.15,180.90,176.99,179.81\n2011-12-03,181.86,184.14,177.70,178.86\n2011-11-30,187.34,187.70,179.70,182.22\n2011-11-29,179.43,185.17,179.15,184.29\n2011-11-28,176.82,180.60,175.35,180.22\n2011-11-27,175.22,175.79,170.01,174.81\n2011-11-26,173.59,177.27,172.35,172.54\n2011-11-23,172.00,172.05,169.75,171.54\n2011-11-21,165.84,172.35,164.67,168.46\n2011-11-20,165.67,171.79,163.53,168.85\n2011-11-19,166.10,168.20,162.10,163.95\n2011-11-16,165.30,167.02,159.33,166.39\n2011-11-15,166.39,169.59,160.30,164.30\n2011-11-14,177.16,177.57,163.74,166.11\n2011-11-13,160.85,170.98,153.76,169.96\n2011-11-12,165.28,167.70,150.63,153.76\n2011-11-09,171.15,175.12,165.21,165.37\n2011-11-08,186.67,186.90,167.77,175.47\n2011-11-07,190.61,192.68,186.13,186.30\n2011-11-06,187.05,192.00,185.27,191.79\n2011-11-05,185.29,188.96,184.24,186.18\n2011-11-02,189.21,189.44,183.49,187.87\n2011-11-01,188.60,190.10,180.00,187.44\n2011-10-31,187.63,190.12,184.95,189.95\n2011-10-30,186.18,189.37,184.73,187.00\n2011-10-29,185.45,186.59,184.70,185.09\n2011-10-26,185.29,185.37,182.88,184.70\n2011-10-25,184.87,185.90,181.66,182.78\n2011-10-24,185.81,187.21,179.24,185.93\n2011-10-23,188.56,188.60,182.76,186.16\n2011-10-22,170.35,174.90,169.96,174.36\n2011-10-19,174.24,174.63,170.00,170.42\n2011-10-18,171.50,174.19,171.05,173.50\n2011-10-17,172.69,173.04,169.18,172.75\n2011-10-16,165.54,170.18,165.15,169.58\n2011-10-15,167.98,169.57,163.50,166.98\n2011-10-12,163.01,167.28,161.80,167.25\n2011-10-11,169.49,171.88,153.21,162.23\n2011-10-10,167.55,167.88,165.60,166.79\n2011-10-09,170.20,171.11,166.68,167.86\n2011-10-08,163.49,167.91,162.97,167.91\n2011-10-05,158.37,161.58,157.70,161.45\n2011-10-04,158.00,158.08,153.50,156.24\n2011-10-03,157.78,159.18,157.01,157.92\n2011-10-02,156.55,158.59,155.89,158.45\n2011-10-01,154.63,157.41,152.93,156.34\n2011-09-28,153.44,154.60,152.75,153.47\n2011-09-27,153.77,154.52,152.32,154.50\n2011-09-26,154.47,155.00,151.25,152.77\n2011-09-25,146.84,153.22,146.82,153.18\n2011-09-24,146.73,149.85,146.65,148.28\n2011-09-21,141.14,144.65,140.31,144.15\n2011-09-20,140.15,141.79,139.32,140.31\n2011-09-19,143.02,143.16,139.40,140.77\n2011-09-18,139.06,142.85,137.83,140.92\n2011-09-17,138.99,140.59,137.60,138.41\n2011-09-14,136.57,138.98,136.20,138.81\n2011-09-13,138.83,139.00,136.65,137.20\n2011-09-12,135.99,139.40,135.75,136.85\n2011-09-11,137.90,138.30,133.75,135.49\n2011-09-10,136.99,138.04,133.95,136.71\n2011-09-07,132.01,132.30,130.00,131.77\n2011-09-06,135.56,137.57,132.71,135.01\n2011-09-05,144.97,145.84,136.10,136.76\n2011-09-04,139.94,145.73,139.84,144.16\n2011-08-31,139.49,139.65,137.41,138.48\n2011-08-30,132.67,138.25,132.30,136.25\n2011-08-29,129.88,134.18,129.54,134.08\n2011-08-28,130.99,132.41,126.63,126.82\n2011-08-27,133.39,134.66,132.10,132.25\n2011-08-24,130.53,135.37,129.81,135.30\n2011-08-23,133.09,133.34,129.76,131.07\n2011-08-22,131.22,132.75,130.33,132.51\n2011-08-21,122.21,128.96,121.00,127.57\n2011-08-20,123.96,124.50,120.50,122.22\n2011-08-17,122.01,123.50,119.82,122.06\n2011-08-16,117.01,118.50,111.62,117.05\n2011-08-15,122.74,124.86,119.65,119.90\n2011-08-14,128.29,128.30,123.71,124.03\n2011-08-13,128.32,129.35,126.50,127.79\n2011-08-10,123.12,127.75,120.30,125.00\n2011-08-09,131.11,133.00,125.09,126.39\n2011-08-08,136.76,136.86,132.00,134.01\n2011-08-07,134.94,137.24,132.63,135.03\n2011-08-06,132.90,135.27,128.30,135.25\n2011-08-03,135.26,135.95,131.50,131.85\n2011-08-02,136.65,136.96,134.15,136.49";
	var chartData = [];

	// parse data string first        
	parseData();

	// SERIAL CHART
	chart = new this.AmCharts.AmSerialChart();
	chart.pathToImages = "/lib/samples/javascript/images/";
	chart.panEventsEnabled = true;
	chart.dataProvider = chartData;
	chart.plotAreaBorderColor = "#DADADA";
	chart.plotAreaBorderAlpha = 1;
	chart.autoMargins = false;
	chart.marginTop = 0;
	chart.marginRight = 0;
	chart.marginBottom = 30;
	chart.marginLeft = 0;
	chart.categoryField = "date";

	// AXES
	// Category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
	categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
	categoryAxis.gridAlpha = 0.1;                
	categoryAxis.tickLenght = 0;

	// value
	var valueAxis = new this.AmCharts.ValueAxis();
	valueAxis.gridAlpha = 0.1;
	valueAxis.axisAlpha = 0;
	valueAxis.inside = true;
	chart.addValueAxis(valueAxis);
	
	// GRAPH
	graph = new this.AmCharts.AmGraph();
	graph.title = "Price:";
	graph.type = "ohlc";
	graph.lineColor = "#7f8da9";
	graph.fillColors = "#7f8da9";
	graph.negativeLineColor = "#db4c3c";
	graph.negativeFillColors = "#db4c3c";
	// candlestick graph has 4 fields - open, low, high, close
	graph.openField = "open";
	graph.highField = "high";
	graph.lowField = "low";
	graph.closeField = "close";
	// this will be used by scrollbar"s graph, as we force it to "line" type
	graph.valueField = "close";
	chart.addGraph(graph);

	// CURSOR                
	var chartCursor = new this.AmCharts.ChartCursor();
	chart.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new this.AmCharts.ChartScrollbar();
	chartScrollbar.scrollbarHeight = 30;
	chartScrollbar.graph = graph;
	chartScrollbar.graphType = "line";
	chartScrollbar.gridCount = 4;
	chartScrollbar.color = "#FFFFFF";
	chart.addChartScrollbar(chartScrollbar);

	// WRITE
	chart.write("chart");

		// Parse data
		function parseData() {
			// split data string into array
			var rowArray = dataString.split("\n");
			// loop through this array and create data items
			for (var i = rowArray.length - 1; i > -1; i--) {
				var row = rowArray[i].split(",");
				var dateArray = row[0].split("-");
				// we have to subtract 1 from month, as months in javascript are zero-based
				var date = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
				var open = row[1];
				var high = row[2];
				var low = row[3];
				var close = row[4];

				chartData.push({
					date: date,
					open: open,
					high: high,
					low: low,
					close: close
				});
			}
		}

	callback();
})
.create("ohlc", {width: 600});