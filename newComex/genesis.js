
//$( window ).resize(function() {
//  sigmaLimits();
//});

function pr(msg){
	console.log(msg);
}

var VariablesAleatoriasUniforme = function(semilla){
    this.a=16807;
    this.b=0;
    this.m=2147483647;
    this.u;
    this.semilla=semilla;
    this.x = this.semilla;


    this.generar = function(n){
        uniforme = [];
        x = 0.0;
        x = this.semilla;
        for(i = 1; i < n ; i++){
            x = ((x*this.a)+this.b)%this.m;
            uniforme[i] = x/this.m;
        }
        return uniforme;
    };

    this.nextUniforme = function(){
        x = ((this.x*this.a)+this.b)%this.m;
        this.x = x;
        this.u = this.x/this.m;
        return this.u;
    };
}

instancia = new VariablesAleatoriasUniforme(100000000)
pr(instancia.generar(100));
//var i,s,
//    N = 5,
//    E = 10,
//    g = {
//      nodes: [],
//      edges: []
//    };

// Generate a random graph:
//for (i = 0; i < N; i++)
//  g.nodes.push({
//    id: 'n' + i,
//    label: 'Node ' + i,
//    x: Math.random(),
//    y: Math.random(),
//    size: Math.random(),
//    color: '#666'
//  });
//
//for (i = 0; i < E; i++)
//  g.edges.push({
//    id: 'e' + i,
//    source: 'n' + (Math.random() * N | 0),
//    target: 'n' + (Math.random() * N | 0),
//    size: Math.random(),
//    color: '#ccc'
//  });


new startForceAtlas2("lalalalal");




























//sigma.parsers.gexf('data/miserables.gexf', {
//	container: 'sigma-example',
//	settings: {
//		drawEdges: false,
//		labelThreshold:5
//	}
//},
//function(s) {
//	console.log(s)
//	var c = s.camera;
//	c.goTo({ ratio: 1.2 });
////	s.startForceAtlas2();
//});





