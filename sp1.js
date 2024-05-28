var scoreOfString = function(s) {
    let res=0;
    for(i=1;i<s.length;i++)
    {
     res=res+Math.abs(s.charCodeAt(i)-s.charCodeAt(i-1))
    }
    return res;

};