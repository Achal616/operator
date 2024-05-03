

//1. passing a function as a argument to thwe anather fucnton is callback function

// function sum(a,b)
// {
//      console.log(a+b)
// }

// function calculator(a,b)
// {
//     sum(a,b)
// }
// calculator(10,20)
// _____________________________________________

//2.
// function greet(Name,callback)
// {
//     console.log(Name)

//     //invoke callback
//     callback()//callback me hello functoion ko storre kr skte hai
// }

// function hello()
// {
//     console.log("hello good mornning")
// }

// greet("achal",hello())
// ______________________________________________________________

// function greet(Name,callback){

//     callback()
    
//         console.log(Name)
    

// }
// function hiiii(){
//     console.log("say hii good mornning to achal")
// }
// greet("sagar", hiiii())
// __________________________________________________________________

// function sum(a,b){

//     console.log(a+b)

// }
// function calculatotr(a,b){

//     sum(a,b)

// }
// calculatotr(20,10)
// __________________________________________

// function greet(Name,callback){

   
//     console.log(Name)


// }
// function sayGoodBy(){
//     console.log("sayGoodBy")
// }
// greet("achal",sayGoodBy())
// _______________________________________________________

// function Animal(dog,run){

//     console.log(dog)
   
// run()
    

// }
// function run(){
//     console.log("pappyii can run")
// }
// Animal("pappyii",run)   //passing a function as a argument  to anather function is called callBackf function
// // _____________________________________________________________________
// function hii(Name,sirname){

 
//     console.log(Name)


// }

// function hlw(){

//     console.log("kakde")

// }
// hii("achal",hlw())
// _____________________________________________________________

//callback hell it is function inside a function the following is the example of callback hell

function GetName(name,SetName){

    console.log(name)
    setTimeout(()=>{
        if(SetName)
        {
            SetName()
        }

    },4000)
 

}
GetName("achal",()=>{
    GetName("shiv",()=>{   //function inside a fiunction it is called callback hell
        GetName("ram",()=>{
            GetName("radha",()=>{
                GetName("omkar")
            })
        })
    })
    
})
// ___________________________________________________

// function GetName(Name,setName){

//     console.log(Name)
   

// }
// function setName(){
//     setTimeout(()=>{
      
//         console.log("radhe")
//     },4000)
    
// }
// GetName("Achal",setName())
