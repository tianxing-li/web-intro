/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
// your code goes here

donuts.forEach(function(element){
   console.log(element.type + " donuts cost $" + element.cost + " each"); 
});

//使用 forEach() 方法循环访问该数组，并使用 console.log 输出以下甜甜圈摘要