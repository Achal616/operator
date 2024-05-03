

// let promise = new Promise((pass,fail)=>{
//                                             //producing cod
//     let num = 10;
//     pass (num)
// })
// promise.then(
//     value=>{console.log(value)
    
//         return value+10;                        //consumming cod
    
//     }).then(
//         value=>{console.log(value)
//             return value+10;
//         }
//     ).then(
//         value=>{console.log(value)}
//     )
//     ________________________________________________________________________
    
const promise = new Promise((resolve,reject)=>{
    let req = true;

    if(req==true){
        resolve("request successfully")
    }
    else{
        reject("requestrejected")
    }
}).then(
    value=>{console.log(value)}
).catch(
    error=>{console.log(error)}
    
)
   . finally(
        ()=>{console.log("disk cleaned")}
    )


