//global scope
function foo(a){
    //foo scope
     var b = a * 2 

     function bar(c){
         //bar scope
         console.log(a, b, c)
     }

     bar(b * 3)
}

foo(2); //2, 4, 12

function foo(str, a){
    eval(str): //cheating
    console.log(a, b)
    var b = 2
}

foo("var b = 3", 1) // 1, 3