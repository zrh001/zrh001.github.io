// var a = 10 , fn,var=function(x){
//         var b=5;
//         fn(x+b);
// };
// fn=function(y){
//     var c=5;
//     console.log(y+c);
// }
// bar(10);
var a=10,b=10;
    function fn(){
        var a=100,c=300;
        function bar(){
            var a=1000,d=4000;
        }
        bar(100);
        bar(200);
    }
    fn(10);