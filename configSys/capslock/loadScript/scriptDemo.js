function stepNum(){
    var arr   = [],
        init  = arguments[0]||1,
        count = arguments[1]||10,
        step  = arguments[2]||1;

    while(count--){
        arr.push(init);
        init+=step;
    }
    return arr;
}

function roll(){
    return Math.round(Math.random()*(arguments[0]||100));
}

//String.prototype
var sp=String.prototype;
sp.alignment   = function(){
    var arr    = this.replace(/\n$/,'').split('\n'),
        sign   = arguments[0]||'=',
        sort   = arguments[1]||false,    //sort by name?
        regex  = new RegExp(sign+'\\s*');

    //sort by the length of variable name
    var arr2 = arr.slice(0).sort(function(a,b){
            return a.indexOf(sign) - b.indexOf(sign);
        }),
        eqIndex = arr2[arr2.length-1].indexOf(sign);

    if(sort)arr=arr2;

    arr.forEach(function(item,i){
        var iIndex=item.indexOf(sign),
            s=Array(eqIndex-iIndex+2).join(' ');
        arr[i]=item.replace(regex,s+sign+' ');
    })
    return arr.join('\n');
}
sp.repeat = function(){
    return Array((arguments[0]||2)+1).join(this);
}