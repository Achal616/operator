// let a =document.getElementById("hello")
// console.log(a)

//  let head = document.getElementsByTagName("h2")
// console.log(head)

// console.log(document.getElementsByClassName("b"))
// _______________________________________________________________________

// function changebd(){

//     document.getElementById("bd").style.backgroundColor="teal"
// }


// let btn = document.getElementById("btn")
// btn.onclick=function(){
//     changebd()
  
// }
// _________________________________________________---

// function changebg(){

//     document.getElementById("bd").style.backgroundColor="teal"
//     alert("hlw")
// }

// function changebgbg2(){

//     document.getElementById("bd").style.backgroundColor="black"
//     alert("hii")
// }

// let b1= document.getElementById("btn")
// b1.addEventListener("click",changebg) //addEventListenr is a methos which connect html document with event handler
// // b1.addEventListener("click",changebgbg2)

let changebg =  ()=> {
    document.getElementById("bd").style.backgroundColor="teal"
    alert("hii")
}

let changebg1 = () =>{
    document.getElementById("bd").style.backgroundColor="black"
    alert("hlw")
}
let btn = document.getElementById("btn")
btn.onclick= function(){

    btn.addEventListener("click" ,changebg)
    btn.addEventListener("click" ,changebg1)
}
