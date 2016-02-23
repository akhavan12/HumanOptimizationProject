// set up SVG for D3
var margin = {top: 20, right: 10, bottom: 20, left: 10};
var width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;
    colors = d3.scale.category10();



var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#272C2E");

var background=svg.append("g");
	background.append("svg:image")
			.attr("xlink:href","bkg.jpg")
			.attr("x","0")
			.attr("y","0")
			.attr("width","100%")
			.attr("height","100%")


var settings = svg.append("g")
              settings.append("svg:image")
                .attr("xlink:href", "settings.png")
                .attr("x", "100")
                .attr("y", "20")
                .attr("width", "60")
                .attr("height", "60");

var bar = svg.append("rect")
			.attr("x","270")
			.attr("y","20")
			.attr("width","760")
			.attr("height","60")
			.attr("fill","black");

var debris = svg.append("g")
	debris.append("svg:image")
			.attr("xlink:href","debris.png")
			.attr("class","debris")
			.attr("x","310")
			.attr("y","25")
			.attr("width","50")
			.attr("height","50");

var red_debris=svg.append("svg:text")
					.attr("x", "365")
               		.attr("y", "65")
              		.text("075")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#db4f68");

var blue_debris=svg.append("svg:text")
					.attr("x", "425")
               		.attr("y", "65")
              		.text("155")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#3375e7");

var green_debris=svg.append("svg:text")
					.attr("x", "485")
               		.attr("y", "65")
              		.text("225")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#33e787");


var profit = svg.append("g")
	profit.append("svg:image")
			.attr("xlink:href","profit.png")
			.attr("x","535")
			.attr("y","17")
			.attr("width","70")
			.attr("height","70");

var red_profit=svg.append("svg:text")
					.attr("x", "595")
               		.attr("y", "65")
              		.text("165")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#db4f68");

var blue_profit=svg.append("svg:text")
					.attr("x", "655")
               		.attr("y", "65")
              		.text("155")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#3375e7");

var green_profit=svg.append("svg:text")
					.attr("x", "715")
               		.attr("y", "65")
              		.text("135")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#33e787");

var time = svg.append("g")
	time.append("svg:image")
			.attr("xlink:href","time.png")
			.attr("x","770")
			.attr("y","25")
			.attr("width","50")
			.attr("height","50");

var red_time=svg.append("svg:text")
					.attr("x", "825")
               		.attr("y", "65")
              		.text("035")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#db4f68");

var blue_time=svg.append("svg:text")
					.attr("x", "885")
               		.attr("y", "65")
              		.text("015")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#3375e7");

var green_time=svg.append("svg:text")
					.attr("x", "945")
               		.attr("y", "65")
              		.text("065")
               		.attr("font-family", "inherit")
                	.attr("font-size", "35px")
                	.attr("fill", "#33e787");


var redButton=svg.append('g')
                .append("svg:polygon")
                .attr('class','redButton')
                .style("fill","#db4f68")
                .attr("points","650,590, 665,590, 670,640, 645,640")
                .attr("cursor","pointer")

    redButton.on('click',function(){
      console.log("this is red truck");
    });

var greenButton=svg.append('g')
                .append("svg:polygon")
                .attr('class','greenButton')
                .style("fill","#33e787")
                .attr("points","710,590, 725,590, 730,640, 705,640")
                .attr('cursor','pointer')

    greenButton.on('click',function(){
      console.log("this is green truck");
    });

var blueButton=svg.append('g')
                .append("svg:polygon")
                .style("fill","#3375e7")
                .attr('class','blueButton')
                .attr("points","770,590, 785,590, 790,640, 765,640")
                .attr('cursor','pointer')

    blueButton.on('click',function(){
      console.log("this is blue truck");
    });



var reset = svg.append("g")
	reset.append("svg:image")
		.attr("xlink:href","reset.png")
		.attr("x","1200")
		.attr("y","20")
		.attr("width","60")
		.attr("height","60");

var trumpet = svg.append("g")
	trumpet.append("svg:image")
		.attr("xlink:href","trumpet.jpg")
		.attr("x","1130")
		.attr("y","20")
		.attr("width","60")
		.attr("height","60");


var data={
			"nodes":[
					{"name":"S","id": 0, "x":width/2,"y":height/2},
    				{"name":"1","id": 1, "x":width/2,"y":height/3-100},
    				{"name":"2","id": 2, "x":width/4,"y":height/2},
    				{"name":"3","id": 3, "x":width/3+40,"y":height/4*3},
    				{"name":"4","id": 4, "x":width/2+100,"y":height/4*3},
    				{"name":"5","id": 5, "x":width/2+140,"y":height/2},
    				{"name":"6","id": 6, "x":width/2+200,"y":height/2-100},
    				{"name":"7","id": 7, "x":width/2+240,"y":height/2},
					],
			"links":[]
		}
	nodes1 = [
    {"name":"S",id: 0, x:width/2,y:height/2},
    {"name":"1",id: 1, x:width/2,y:height/3-100},
    {"name":"2",id: 2, x:width/4,y:height/2},
    {"name":"3",id: 3, x:width/3+40,y:height/4*3},
    {"name":"4",id: 4, x:width/2+100,y:height/4*3},
    {"name":"5",id: 5, x:width/2+140,y:height/2},
    {"name":"6",id: 6, x:width/2+200,y:height/2-100},
    {"name":"7",id: 7, x:width/2+240,y:height/2},
    // {"name":"8",id: 8, x:width/2+30,y:height/4*3},
    // {"name":"9",id: 9, x:width/2+30,y:height/4*3},
    // {"name":"10",id:10, x:width/2+30,y:height/4*3},
    // {"name":"11",id:11, x:width/2+30,y:height/4*3},
    // {"name":"12",id:12, x:width/2+30,y:height/4*3},
  ],
  links = [];

svg.append('line')
  .attr('class','line')
  .attr("x1", nodes1[0].x)
  .attr("y1", nodes1[0].y)
  .attr("x2", nodes1[1].x)
  .attr("y2", nodes1[1].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[0].x)
.attr("y1", nodes1[0].y)
.attr("x2", nodes1[2].x)
.attr("y2", nodes1[2].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[0].x)
.attr("y1", nodes1[0].y)
.attr("x2", nodes1[3].x)
.attr("y2", nodes1[3].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[2].x)
.attr("y1", nodes1[2].y)
.attr("x2", nodes1[1].x)
.attr("y2", nodes1[1].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[2].x)
.attr("y1", nodes1[2].y)
.attr("x2", nodes1[3].x)
.attr("y2", nodes1[3].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[4].x)
.attr("y1", nodes1[4].y)
.attr("x2", nodes1[5].x)
.attr("y2", nodes1[5].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[4].x)
.attr("y1", nodes1[4].y)
.attr("x2", nodes1[3].x)
.attr("y2", nodes1[3].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[5].x)
.attr("y1", nodes1[5].y)
.attr("x2", nodes1[0].x)
.attr("y2", nodes1[0].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[6].x)
.attr("y1", nodes1[6].y)
.attr("x2", nodes1[1].x)
.attr("y2", nodes1[1].y)

svg.append('line')
.attr('class','line')
.attr("x1", nodes1[5].x)
.attr("y1", nodes1[5].y)
.attr("x2", nodes1[7].x)
.attr("y2", nodes1[7].y)

// var circle = svg.append('svg:g').selectAll('g');

// circle.data(nodes,function(d){return d.id;})
// 	.
// circle.selectAll('circle')
// 	.style('fill','red')
// 	.classed('reflexive',function(d){return d.reflexive;});
// var g=circle.enter().append('svg:g');
// 	g.append('svg:circle')
// 	.attr('class', 'node')
// 	.attr('r', 24)
// 	.style('fill','red')
// 	.style('stroke','white')

var depot = svg.append("g")
	depot.append("svg:image")
		.attr("xlink:href","depot.png")
		.attr("x",width/2-36)
		.attr("y",height/2-35)
		.attr("width","70")
		.attr("height","70");


data.nodes.forEach(function(d) {
                d.fixed = true;
                d.x = d.x;
                d.y = d.y;
            });

var force = self.force = d3.layout.force()
				.nodes(data.nodes)
				.charge(-250)
				.size([width, height])
				.start();

// var node = data(data.nodes)
// 			  .enter().append("svg:g")
// 				.attr("class", "node")
// 				.call(force.drag);
var node = svg.selectAll("g.node")
				.data(data.nodes)
			  .enter().append("svg:g")
				.attr("class", "node")


node.append("circle")
			  	.attr("class", function(d){ return "node id"+d.id})
				.attr("r","18")
				.attr("fill","#bdd3f7")
				.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
				//.on("mouseover", expandNode);
				// .style("fill", function(d) { return fill(d.type); })
				
			
d3.select("body")
	.select(".node.id0")
	.attr('opacity', 0)



// 		depot.append("svg:image")	
// 			.attr("class","start_image")
// 			.attr("xlink:href","depot.png")
// 			.attr("x",this.x)
// 			.attr("y",this.y)
// 			.attr("width","100%")
// 			.attr("height","100%")



	// .attr("x",function(d){return d.x})
	// .attr("y",function(d){return d.y})			
		
// node.append("svg:image")
// 	.attr("class", function(d){ return "circle img_"+d.name })
// 	.attr("xlink:href", function(d){ return d.img_hrefD})
// 	.attr("x", "-36px")
// 	.attr("y", "-36px")
// 	.attr("width", "70px")
// 	.attr("height", "70px")


// force.on("tick", function() {
// 			  // link.attr("x1", function(d) { return d.source.x+(d.no*4);})
// 				 //  .attr("y1", function(d) { return d.source.y+(d.no*4);})
// 				 //  .attr("x2", function(d) { return d.target.x+(d.no*4);})
// 				 //  .attr("y2", function(d) { return d.target.y+(d.no*4);});
		
// 			  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// 			});



svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

 svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
  .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// line displayed when dragging new nodes
var drag_line = svg.append('svg:path')
  .attr('class', 'link dragline hidden')
  .attr('d', 'M0,0L0,0');

// handles to link and node element groups
var path = svg.append('svg:g').selectAll('path')




