var countMatches = function(items, ruleKey, ruleValue) {
    var ruleKeys =['type','color','name'];
     var keyIndex = ruleKeys.indexOf(ruleKey);
     var count=0;
   for(var i=0;i<items.length;i++){
       if(items[i][keyIndex]===ruleValue) count++;    
   }return count
};
