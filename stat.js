(function (){
    
    
    function reduce(array, combine, start) 
    {
        let current = start;
        for (let element of array) {
        current = combine(current, element);
    }
        return current;
} 
    var max=function(data){
        return reduce(data,(a,b)=>a>b.credit?a:b.credit)
    }

window.my={max:max}//my对象里有一个属性他是一个方法 是max
})()
   