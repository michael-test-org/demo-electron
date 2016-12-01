module.exports = function(input) {
    var res = [];
    for (var i=0; i<input; i++) {
        if (res.length == 0){
            res.push(0);
        } else if (res.length == 1){
            res.push(1);
        } else {
            res.push( res[res.length-2] + res[res.length-1] );
        }
    }
    return res;
}
