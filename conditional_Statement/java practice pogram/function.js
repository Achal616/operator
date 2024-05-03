
let a =20

function global()
{
    let b =30

    console.log(a+b)
}
global()

function local()
{
 let i = 40
 console.log(i)
}
local()
