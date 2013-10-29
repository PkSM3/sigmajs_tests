/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function pr(msg) {
    console.log(msg);
}

function listGexfs(){
    console.log("WOLOLO WOLOLO WOLOLO WOLOLO");
    $.ajax({
        type: 'GET',
        url: 'php/listFiles.php',
        data: "url=nothing",
        //contentType: "application/json",
        //dataType: 'json',
        success : function(data){ 
            $("#gexfs").html(data);
        },
        error: function(){ 
            console.log("Page Not found.");
        }
    });
    pushSWClick("");
}

function pushSWClick(arg){
    swclickPrev = swclickActual;
    swclickActual = arg;
//pr("1. swclickPrev: "+swclickPrev+" - swclickActual: "+swclickActual);
}

function emptyFuckingEverything(partialGraph){   
    console.log(partialGraph);
    partialGraph.emptyGraph();
}


getUrlParam = (function () {
    var get = {
        push:function (key,value){
            var cur = this[key];
            if (cur.isArray){
                this[key].push(value);
            }else {
                this[key] = [];
                this[key].push(cur);
                this[key].push(value);
            }
        }
    },
    search = document.location.search,
    decode = function (s,boo) {
        var a = decodeURIComponent(s.split("+").join(" "));
        return boo? a.replace(/\s+/g,''):a;
    };
    search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function (a,b,c) {
        if (get[decode(b,true)]){
            get.push(decode(b,true),decode(c));
        }else {
            get[decode(b,true)] = decode(c);
        }
    });
    return get;
})();