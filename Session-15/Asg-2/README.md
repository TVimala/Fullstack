1. get http://localhost:3500/products

OUTPUT:

![image](https://github.com/TVimala/Fullstack/assets/143889003/de38547a-f1d6-44ad-aad0-b89ba29f2e71)

2.get http://localhost:3500/products/2

OUTPUT:

![image](https://github.com/TVimala/Fullstack/assets/143889003/cf1ca8be-2543-4465-8188-a47867cbf1a8)

3.post http://localhost:3500/product

Content-Type: application/json

 {
        "id":4,
        "brand":"vivo",
        "price":15000
}

OUTPUT:

![image](https://github.com/TVimala/Fullstack/assets/143889003/43406ad9-2eeb-4985-88da-ce7e0f01113c)

4.put http://localhost:3500/product/2

Content-Type: application/json
 {
        "id":2,
        "brand":"iphone",
        "price":60000
}

OUTPUT:

![image](https://github.com/TVimala/Fullstack/assets/143889003/03a03cdd-06d9-4b3c-b784-bf05339cd2d8)

5.delete http://localhost:3500/product/1

OUTPUT:

![image](https://github.com/TVimala/Fullstack/assets/143889003/9c33ee8b-24e5-4402-b57a-37e9d7a65ab7)







