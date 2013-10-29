
// Instanciate sigma.js and customize rendering :
var swclickPrev;
var swclickActual;

listGexfs();

if(typeof(getUrlParam.file)!=="undefined"){
    $.doTimeout(30,function (){
        listGexfs();
        pr(getUrlParam.file);
        //startSigma("");     
    });
} else {
    window.location.href=window.location.origin+window.location.pathname+"?file=\"-\"";
}

function startSigma(path) {
    pushSWClick(path)
    if(typeof(partialGraph)!=="undefined"){
        console.log("\ndeleting "+swclickPrev);
        console.log("graphing "+path);
        emptyFuckingEverything(partialGraph);
    }
    partialGraph = sigma.init(document.getElementById('sigma-example')).drawingProperties({
        defaultLabelColor: '#fff',
        defaultLabelSize: 14,
        defaultLabelBGColor: '#fff',
        defaultLabelHoverColor: '#000',
        labelThreshold: 6,
        defaultEdgeType: 'curve'
    }).graphProperties({
        minNodeSize: 0.5,
        maxNodeSize: 5,
        minEdgeSize: 1,
        maxEdgeSize: 1
    }).mouseProperties({
        minRatio: 0.3,
        maxRatio: 4
    });

    // Parse a GEXF encoded file to fill the graph
    // (requires "sigma.parseGexf.js" to be included)
    partialGraph.parseGexf('../data/'+path);

    // Bind events :
    var greyColor = '#666';
    partialGraph.bind('overnodes',function(event){
        var nodes = event.content;
        var neighbors = {};
        partialGraph.iterEdges(function(e){
            if(nodes.indexOf(e.source)<0 && nodes.indexOf(e.target)<0){
                if(!e.attr['grey']){
                    e.attr['true_color'] = e.color;
                    e.color = greyColor;
                    e.attr['grey'] = 1;
                }
            }else{
                e.color = e.attr['grey'] ? e.attr['true_color'] : e.color;
                e.attr['grey'] = 0;

                neighbors[e.source] = 1;
                neighbors[e.target] = 1;
            }
        }).iterNodes(function(n){
            if(!neighbors[n.id]){
                if(!n.attr['grey']){
                    n.attr['true_color'] = n.color;
                    n.color = greyColor;
                    n.attr['grey'] = 1;
                }
            }else{
                n.color = n.attr['grey'] ? n.attr['true_color'] : n.color;
                n.attr['grey'] = 0;
            }
        }).draw(2,1,2);
    }).bind('outnodes',function(){
        partialGraph.iterEdges(function(e){
            e.color = e.attr['grey'] ? e.attr['true_color'] : e.color;
            e.attr['grey'] = 0;
        }).iterNodes(function(n){
            n.color = n.attr['grey'] ? n.attr['true_color'] : n.color;
            n.attr['grey'] = 0;
        }).draw(2,1,2);
    });

    // Draw the graph :
    partialGraph.refresh();
    partialGraph.startForceAtlas2();
}
