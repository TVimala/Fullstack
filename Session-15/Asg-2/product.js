const exp=require('express')
const app=exp()
app.use(exp.json())
let products=[
    {
        id:1,
        brand:'redmi',
        price:30000
    },
    {
        id:2,
        brand:'iphone',
        price:70000
    },{
        id:3,
        brand:'oppo',
        price:20000
    },
]
app.get('/products',(req,res)=>{
    res.send({message:'all products',payload:products})
})
app.get('/products/:id',(req,res)=>{
    let idurl=Number(req.params.id);
    let productid=products.find((product)=>product.id===idurl)
    if(productid===undefined)
        res.send({message:"invalid product id"})
    else
        res.send({message:"one product",payload:productid})
})
app.post('/product',(req,res)=>{
    const newproduct=req.body;
    products.push(newproduct)
    res.send({message:"new product added",payload:products})
})
app.put('/product/:id',(req,res)=>{
    let modproduct=Number(req.params.id);
    let p=req.body;
    let product=products.findIndex((i)=>i.id===modproduct)
    if(product===-1)
        res.send({message:'product not found'})
    else{
        products[product]=p;
        res.send({message:"product updated",payload:products})
    }
});
app.delete('/product/:id',(req,res)=>{
    let producturl=Number(req.params.id)
    let index=products.findIndex((product)=>product.id===producturl)
    if(index===undefined)
        res.send({message:'product not found'})
    else{
    products.splice(index,1)
    res.send({message:"product deleted",payload:products})
    }
});
app.listen(3500,()=>console.log("http server started on port 3500"))


