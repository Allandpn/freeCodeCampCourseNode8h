const express = require("express")
const {products, people} = require("./data")

const app = express()

app.get("/", (req, res)=> {
    res.send(
        "<h1>Products: </h1><a href=/api/products>products</a><div><a href='http://hn.algolia.com/api/v1/items/'>API</a></div>"
        )
})

app.get("/api/products", (req, res)=> {
    const nwProducts = products.map((product)=>{
        const {id,name, price} = product
        return {id,name, price} 
    })
    res.json(nwProducts)
})

app.get("/api/products/:productId", (req, res)=> {
    const {productId} = req.params
    console.log(productId)
    const singleProduct = products.find((product) => 
        product.id === Number(productId)
    )
    if(!singleProduct){
        res.status(404).send("Product does not exist")
    }
    res.json(singleProduct)
})


app.get("/api/:productId/reviews/:reviewId", (req,res) => {
    console.log(req.params);
    res.send("Reviews")
})

app.get("/api/v1/query", (req,res)=> {
    const {search, limit} = req.query
    //[...] converte em um array
    let newProducts = [...products]
    if(search) {
        newProducts = newProducts.filter((product)=> {
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }
    if(newProducts.length < 1) {
        //res.status(200).send("no products matched your search")
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(newProducts)

})


app.listen(5000, ()=> {
    console.log("server listening on port 5000...")
})