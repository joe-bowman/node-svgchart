Introduction
============
node-svgchart aims to provide a general interface to generate charts on the server side without any need for an x-server or anything of the like.

You might find it useful for generating reports if you want to use the exact same charts on the frontend, or for supporting old browsers. If you're in an environment that *does* support a graphical interface (GUI), however, then you should probably consider simply screen-capturing the charts, using something like CutyCapt or wkhtmltopdf.

Dependencies
============
To get it up and running, you will need:
* Node.js
* ImageMagick

Compatibility
=============
* AnyChart 6.0.10
* gRaphaël
* ico
* Highcharts (somewhat, be sure to disable animations)
* amCharts (legends will disappear)
* grafico (only in safe mode, and minified version doesn't work)

Usage
=====
```javascript
var chart = require("node-svgchart");

chart
    .require("path/to/my/chart/lib.js")
    .setup(function(e, callback) {
    	//Setup chart using your library. Write to #chart.
    	//Note: The global object is still "global", so explicitly access "e.window".
        //      -> this = e.window
        //IMPORTANT: You have to call the callback to make it continue. 
    })
    .create("myIdentifier", {
    	//Options that will be passed to rsvg
    	width: 500
    }, function(err, image) {
    	//image is a buffer.
    });
```

Installation
============
1. Download files from github
2. Extract files into a folder
3. Go there and run `npm install`

Pictures
========
[ico](https://github.com/uiteoi/ico)
---
![Ico line chart](http://zomg.ch/node/line.png)

[amCharts](http://amcharts.com/)
--------
![amCharts OHLC chart](http://zomg.ch/node/ohlc.png)

[gRaphaël](http://g.raphaeljs.com/)
--------
![gRaphaël bar chart](http://zomg.ch/node/bar.png)

[Highcharts](http://www.highcharts.com/)
----------
![Highcharts area chart](http://zomg.ch/node/pie.png)

[AnyChart](http://www.anychart.com/)
---------
![AnyChart scatter chart](http://zomg.ch/node/scatter.png)


Notes
=====
- Image object is not yet implemented by jsdom. There *is* [a patch for it](https://github.com/tmpvar/jsdom/commit/91a6d271f9), though.
- As soon as a library fiddles with prototypes, you have to use safe mode.

Todos
=====
- Proper unit tests
- Proper SVG implementation (long term)
    - All the values should be SVGLengths, etc.
- More examples
- Documentation
- More supported libraries

------
API
===

setSafeMode(bool on)
--------------------
Turn safe mode on / off. If safe mode is off, the script code of your libraries will be rewritten to refrain from using "instanceof Array" because of context issues.

If that causes problems, you can disable that behavior. However, you will then have to use "window.Array" to create your arrays.

