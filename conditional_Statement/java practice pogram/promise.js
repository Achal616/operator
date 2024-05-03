
const promise = new Promise((resolve,reject)=>{
    let req=true;
    if (req==true) {
        resolve("request successful")
        
    } else {
        reject("request rejected")
        
    }
});

promise.then(
    value=>{console.log(value)},
    error=>{console.log(error)}
)