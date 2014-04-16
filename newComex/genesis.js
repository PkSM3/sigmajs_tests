function sigmaLimits(){
	sidebar=$('#leftcolumn').width();
	anchototal=$('#fixedtop').width();
	altototal=$('#leftcolumn').height();
	altofixtop=$('#fixedtop').height()
	altodeftop=$('#defaultop').height()
	$('#sigma-example').width(anchototal-sidebar);
	$('#sigma-example').height(altototal-altofixtop-altodeftop-2);
}

var body=document.getElementsByTagName('body')[0];
body.style.paddingTop="41px";

sigmaLimits();

$( window ).resize(function() {
  sigmaLimits();
});

partialGraph={}

sigma.parsers.gexf('data/miserables.gexf', {
	container: 'sigma-example',
	settings: {
		drawEdges: false,
		labelThreshold:5
	}
},
function(s) {
	console.log(s)
	var c = s.camera;
	c.goTo({ ratio: 1.2 });
//	s.startForceAtlas2();
});





