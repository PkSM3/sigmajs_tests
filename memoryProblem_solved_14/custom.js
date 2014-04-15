
// Instanciate sigma.js and customize rendering :
var swclickPrev;
var swclickActual;

listGexfs();

if(typeof(getUrlParam.file)!=="undefined"){
//    $.doTimeout(30,function (){
//        listGexfs();
//        pr(getUrlParam.file);
//        //startSigma("");     
//    });
    $.doTimeout(30,function (){
        pr("getUrlParam.file has something:");
        if(getUrlParam.file==="" || getUrlParam.file==="-") {
            pr("\tfile parameter not defined");
        }
        else {
            pr("\tfile parameter NOT empty");            
            $.doTimeout(30,function (){
                //listGexfs();
                startSigma(getUrlParam.file);     
            });
        }    
    });
    
    
} else {
    pr("oh oh");
    //window.location.href=window.location.origin+window.location.pathname+"?file=";
}

function startSigma(path) {
	pushSWClick(path)

	sigma.parsers.gexf('../data/'+path, {
		container: 'sigma-example',
		settings: {
			drawEdges: true,
			labelThreshold:6,
			defaultLabelColor: '#fff',
			defaultLabelSize: 14,
			defaultLabelBGColor: '#fff',
			defaultLabelHoverColor: '#000',
			minNodeSize: 0.5,
			maxNodeSize: 5,
			minEdgeSize: 1,
			maxEdgeSize: 1,
			minRatio: 0.3,
			maxRatio: 4
		}
	},
	function(s) {
		console.log(s)
		var c = s.camera;
		c.goTo({ ratio: 1.2 });
		var edges = s.graph.edges(); 
		for (var i = 0; i < edges.length; i += 1){
		    edges[i].type = 'curve';
		}
		s.startForceAtlas2();
	});

}
