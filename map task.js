//ex1

function doubleNumbers(arr) {
    return arr.map(val => val * 2);
  }
    
  console.log(doubleNumbers([2, 5, 100]));


//ex2

  function stringItUp(arr){  
    let strArr = arr.map(String);  
    return strArr;  
    }  
      
    console.log(stringItUp([2, 5, 100]));  

//ex3
    function capitalizeNames(arr){  
        let uppClassArr=arr.map(function(string){  
        return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase();  
        })  
        return uppClassArr  
        }  
          
        console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));  





//ex4
        function namesOnly(arr){  
            let onlyNameArr = arr.map(x=>x.name);  
            return onlyNameArr;  
            }  
              
            console.log(namesOnly([  
            {  
            name: "Angelina Jolie",  
            age: 80  
            },  
            {  
            name: "Eric Jones",  
            age: 2  
            },  
            {  
            name: "Paris Hilton",  
            age: 5  
            },  
            {  
            name: "Kayne West",  
            age: 16  
            },  
            {  
            name: "Bob Ziroll",  
            age: 100  
            }  
            ]));  


//ex5


function makeStrings(arr){  
    let reFormArr = arr.map(arr =>{  
        if(arr.age>=18){  
        console.log(arr.name + ' can go to The Matrix')  
        }else {  
        console.log(arr.name + " is under age!!");  
        }  
        })  
        }  
    
      
    console.log(makeStrings([  
    {  
    name: "Angelina Jolie",  
    age: 80  
    },  
    {  
    name: "Eric Jones",  
    age: 2  
    },  
    {  
    name: "Paris Hilton",  
    age: 5  
    },  
    {  
    name: "Kayne West",  
    age: 16  
    },  
    {  
    name: "Bob Ziroll",  
    age: 100  
    }  
    ]));  

    //ex6


    function readyToPutInTheDOM(arr){  
        let reFormArr = arr.map(arr =>{  
            console.log('<h1>'+arr.name+'</h1>'+"<h2>"+arr.age+'</h2>')  
            })  
        }  
        console.log(readyToPutInTheDOM([  
        {  
        name: "Angelina Jolie",  
        age: 80  
        },  
        {  
        name: "Eric Jones",  
        age: 2  
        },  
        {  
        name: "Paris Hilton",  
        age: 5  
        },  
        {  
        name: "Kayne West",  
        age: 16  
        },  
        {  
        name: "Bob Ziroll",  
        age: 100  
        }  
        ]));  



//ex7

function doubleValues(arr) {
    return arr.map(val => val * 2);
  }
    console.log(doubleValues([1,2,3]))
    console.log(doubleValues([1,-2,-3]))



    //ex8

    function valTimesIndex(arr) {
        return arr.map((val, i) => val * i);
      }
      
      console.log(valTimesIndex([1,2,3]))
      console.log(valTimesIndex([1,-2,-3]))
      
      
      //ex9
      function extractKey(arr, key) {
        return arr.map(val => val[key]);
      }
      
      console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'))

      //ex10
      function extractFullName(arr) {
        return arr.map(val => val.first + ' ' + val.last);
      }
   
   console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])) 

   //ex11
   let r = [1,8,6,4,5];
let r1 = r.filter(evenOnly);
function evenOnly(n){
    return n%2==0
}
console.log(r1)

//ex12
let f = [1,8,6,4,10,18];
let f1 = f.filter(multiFour);
function multiFour(n){
    return n%4 == 0
}
console.log(f1)

//ex 13
function containChar(arr2,q){

  let arr1 = arr2.filter(multiFour);
  function multiFour(n){
      return n.includes(q)?true:false
     }   return arr1
  }
  console.log(containChar(["hello","world"],"l"))
  console.log(containChar(["hello","world"],"e"))

  