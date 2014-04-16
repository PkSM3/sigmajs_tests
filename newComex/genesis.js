
//$( window ).resize(function() {
//  sigmaLimits();
//});

function pr(msg){
	console.log(msg);
}
//
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
////pr(instancia.nextUniforme())
//var i,s,
//    N = 5,
//    E = 10,
//    g = {
//      nodes: [],
//      edges: []
//    };
// //Generate a random graph:
//for (i = 0; i < N; i++)
//  g.nodes.push({
//    id: 'n' + i,
//    label: 'Node ' + i,
//    x: instancia.nextUniforme(),
//    y: instancia.nextUniforme(),
//    size: 4,
//    degree:(i==2)?4:2,
//    color: '#666'
//  });
//
//edge={ id:0, source:'n0', target:'n1', size:1,color: '#ccc'};g.edges.push(edge);
//edge={ id:1, source:'n0', target:'n2', size:1,color: '#ccc'};g.edges.push(edge);
//edge={ id:2, source:'n1', target:'n2', size:1,color: '#ccc'};g.edges.push(edge);
//edge={ id:3, source:'n2', target:'n3', size:1,color: '#ccc'};g.edges.push(edge);
//edge={ id:3, source:'n2', target:'n4', size:1,color: '#ccc'};g.edges.push(edge);
//edge={ id:3, source:'n3', target:'n4', size:1,color: '#ccc'};g.edges.push(edge);

var i,s,
    N = 5,
    E = 10,
    g = {
      nodes: [],
      edges: []
    };
 //Generate a random graph:
 
partialGraph = sigma.init(document.getElementById('sigma-hola'))
for (i = 0; i < N; i++) {
  node = {
    id: 'n' + i,
    label: 'Node ' + i,
    x: instancia.nextUniforme(),
    y: instancia.nextUniforme(),
    size: 4,
    degree:(i==2)?4:2,
    color: '#666'
  }
  g.nodes.push(node);
  partialGraph.addNode(node.id,node);
}

edge={ id:"0", sourceID:'n0', targetID:'n1', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(0,'n0','n1',edge);
edge={ id:"1", sourceID:'n0', targetID:'n2', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(1,'n0','n2',edge);
edge={ id:"2", sourceID:'n1', targetID:'n2', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(2,'n1','n2',edge);
edge={ id:"3", sourceID:'n2', targetID:'n3', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(3,'n2','n3',edge);
edge={ id:"4", sourceID:'n2', targetID:'n4', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(4,'n2','n4',edge);
edge={ id:"5", sourceID:'n3', targetID:'n4', weight:1,color: '#ccc'};g.edges.push(edge);
partialGraph.addEdge(5,'n3','n4',edge);

pr(partialGraph._core.graph.nodesIndex)
pr(partialGraph._core.graph.edgesIndex)

//iterations=10000;
new startForceAtlas2(partialGraph._core.graph);
pr(partialGraph._core.graph.nodesIndex)




























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





