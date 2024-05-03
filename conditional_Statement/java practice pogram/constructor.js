
function mobile(){

    this.colore="gray",
    this.price=30000,
    this.ram="5gb",
    this.Name="vivo"
}

let samsung =  new mobile()

for(mobile in samsung)
{
    console.log(samsung[mobile])
}