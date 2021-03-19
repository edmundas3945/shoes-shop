const titleOfPage = document.getElementById('picassoTxt')
const main = document.getElementById('main')
const shop = document.getElementById('shop')
const itemChosen = document.getElementById('itemChosen')
const shopBtn = document.getElementById('backToShop')
const largeIcon = document.getElementById('largeIcon')
const chosenProductName = document.getElementById('chosenProductName')
const chosenProductPrice = document.getElementById('chosenProductPrice')
const smallerIcon = document.getElementsByClassName('smallerIcon')
const removeBox = document.getElementById('removeBox')
const topNavBar = document.getElementById('topNavBar')
const smallerIcons = document.getElementById('smallerIcons')
const cart = document.getElementById('cart')
const toCart = document.getElementById('toCart')
const fromCartToShop = document.getElementById('fromCartToShop')
const addToCart = document.getElementsByClassName('addToCart')
const selectSize = document.getElementById('selectSize')
const midText = document.getElementsByClassName('midText')
const btnBox = document.querySelector('.btnBox')
const cartBox = document.getElementById('cartBox')

let cartBank = 0

toCart.innerText = `$${cartBank}.00 CART`

let products = [
    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f204ed5c024d42498e67ab9e012eb10f_9366/OZWEEGO_Shoes_White_FV9654_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9535beef288247efb9e4ab9e012ec028_9366/OZWEEGO_Shoes_White_FV9654_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/dad6b877e7fd4f1eb278ab9e012ec786_9366/OZWEEGO_Shoes_White_FV9654_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ced8f95abe745cd95b6ab9f001dc207_9366/OZWEEGO_Shoes_White_FV9654_04_standard.jpg"
        ],
        stock: "2",
        price: "80",
        id: "1",
    },
    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a00e176273414e2d986babc90099fa3e_9366/ZX_2K_Boost_Shoes_White_FV9996_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/22ca1f055a294725880aabc9009a070a_9366/ZX_2K_Boost_Shoes_White_FV9996_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4560338c129440d894d9abc9009a0e97_9366/ZX_2K_Boost_Shoes_White_FV9996_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd11b47048434931acd9abc9009a1542_9366/ZX_2K_Boost_Shoes_White_FV9996_04_standard.jpg"
        ],
        stock: "8",
        price: "150",
        id: "2",
    },
    {
        title: "X90004D SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6641ce0097f4b9ca22cabdd00a1c66e_9366/X90004D_Shoes_Black_FW7093_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bca524f6e564ce19f7babdd00a1d334_9366/X90004D_Shoes_Black_FW7093_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/0075d5d3a0b8418c9756abdd00a1dad2_9366/X90004D_Shoes_Black_FW7093_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfcf28ea55442e8130abdd00a1e173_9366/X90004D_Shoes_Black_FW7093_04_standard.jpg"
        ],
        stock: "5",
        price: "160",
        id: "3",
    },
    {
        title: "ULTRABOOST 20 SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/c506dc4a84804ab1a907abad011ebdf0_9366/Ultraboost_20_Shoes_Black_FV8330_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d211447e73564a9d9d6babad011ec8fb_9366/Ultraboost_20_Shoes_Black_FV8330_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b01b768b58546cebcf1abad011ecf01_9366/Ultraboost_20_Shoes_Black_FV8330_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd2750a89cb74c73beb4abad011ed544_9366/Ultraboost_20_Shoes_Black_FV8330_04_standard.jpg"
        ],
        stock: "12",
        price: "180",
        id: "4",
    },
    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8afb099dc9047789c63abed0072c6c1_9366/OZWEEGO_Shoes_Grey_FZ1963_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/be589225059b44868386abed0072d488_9366/OZWEEGO_Shoes_Grey_FZ1963_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f897d99916184c928d19abed0072dbd1_9366/OZWEEGO_Shoes_Grey_FZ1963_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d197459d4fcb494380d0abed0072e33a_9366/OZWEEGO_Shoes_Grey_FZ1963_04_standard.jpg"
        ],
        stock: "25",
        price: "110",
        id: "5",
    },
    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/34f64adbe930404f9203abc600b3f7f5_9366/ZX_2K_Boost_Shoes_White_FX8835_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f360335273e45cf9160abc600b3fefc_9366/ZX_2K_Boost_Shoes_White_FX8835_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6105a11bb96483297c5abc600b40603_9366/ZX_2K_Boost_Shoes_White_FX8835_04_standard.jpg"
        ],
        stock: "5",
        price: "150",
        id: "6",
    }
]
let itemsInCart = []

shopBtn.addEventListener('click', backToShop)
smallerIcons.addEventListener('click', changePhoto)
removeBox.addEventListener('click', removePanel)
toCart.addEventListener('click', goToCart)
titleOfPage.addEventListener('click', showMain)
fromCartToShop.addEventListener('click', backToShopCart)



function updateCartBank(cart) {
    
    if (cart.length === 0) {
        cartBank = 0
        toCart.innerText = `$${cartBank}.00 CART`
    }else {
        cartBank = 0
        cart.map(item => {
        cartBank += item.totalPrice
        toCart.innerText = `$${cartBank}.00 CART`
        
    })
    }
    
}



products.map(item => {

    let product = document.createElement('div')
    product.classList.add('product')
    product.addEventListener('click', openProduct)

    let productImg = document.createElement('img')
    productImg.src = item.photos[0]
    productImg.classList.add('productImg')
    productImg.setAttribute('id', item.id)

    let productName = document.createElement('div')
    productName.innerText = item.title
    productName.classList.add('productTitle')

    let productPrice = document.createElement('div')
    productPrice.innerText = `$${item.price}.00`
    productPrice.classList.add('productPrice')


    shop.appendChild(product)
    product.appendChild(productImg)
    product.appendChild(productName)
    product.appendChild(productPrice)

    product.addEventListener('mouseenter', showPriceAndTitle)
    function showPriceAndTitle(){
        productName.style.display = 'block'
        productPrice.style.display = 'block'
    }
    product.addEventListener('mouseleave', hidePriceAndTitle)
    function hidePriceAndTitle(){
        productName.style.display = 'none'
        productPrice.style.display = 'none'
    }

})

function openProduct(event){
    // console.log(event)
    main.style.display = 'none'
    itemChosen.style.display = 'flex'
    products.map(item => {
        if(event.target.id === item.id){
            selectSize.value = '0'
            // console.log(event.target.id)
            btnBox.innerHTML = ''
            let addToCart = document.createElement('div')
            addToCart.classList.add('addToCart')
            addToCart.setAttribute('id', event.target.id)
            addToCart.innerText = 'Add To Cart'
            addToCart.addEventListener('click', addItemToCart)
            btnBox.appendChild(addToCart)

            largeIcon.src = event.path[0].src
            chosenProductName.innerText = item.title
            chosenProductPrice.innerText = `$${item.price}.00`
            smallerIcon[0].src = item.photos[0]
            smallerIcon[1].src = item.photos[1]
            smallerIcon[2].src = item.photos[2]
            smallerIcon[3].src = item.photos[3]
        }
    })

}

function backToShop(){
    itemChosen.style.display = 'none'
    main.style.display = 'block'
}

function changePhoto(e){
    if(e.target !== e.currentTarget){
        // console.log(e.target)
        largeIcon.src = e.target.src
    }
}

function removePanel(){
    // console.log('kazkas')
    topNavBar.style.display = 'none'
}

function goToCart(){
    cart.style.display = 'flex'
    main.style.display = 'none'
    itemChosen.style.display = 'none'
}

function showMain(){
    cart.style.display = 'none'
    itemChosen.style.display = 'none'
    main.style.display = 'block'
}

function backToShopCart(){
    cart.style.display = 'none'
    itemChosen.style.display = 'none'
    main.style.display = 'block'
}

function addItemToCart(event){
    // console.log('works')
    if(selectSize.value < 1){
        selectSize.style.border = '3px solid red'
    }
    else {
        selectSize.style.border = '1px solid black'
        // console.log(event.target.id)
        cart.style.paddingTop = '180px'
        fromCartToShop.style.display = 'none'
        midText[0].style.display = 'none'
        // console.log(event)
        let item = products.filter(x => x.id === event.target.id)
        if(itemsInCart.filter(x => x.id === event.target.id).length === 0){

            if(item[0].stock > 1){
                itemsInCart.push(item[0])
                item[0].counter = 1
                item[0].totalPrice = Number(item[0].price) * item[0].counter
                
                // console.log(itemsInCart)
                // console.log('labas')
            }
        }else {
            if(item[0].counter < item[0].stock){

                
                item[0].counter ++
                item[0].totalPrice = Number(item[0].price) * item[0].counter
                
            }
        }
        
    }
    showItemInCart()
    updateCartBank(itemsInCart)

}

function showItemInCart() {
    cartBox.innerHTML = ''

    itemsInCart.map(item => {

        let productInCart = document.createElement('div')
        productInCart.classList.add('productInCart')

        let emptyDiv1 = document.createElement('div')

        let close = document.createElement('h3')
        close.innerHTML = `<i id="${item.id}" class="fas fa-times"></i>`
        close.classList.add('close')

        let emptyDiv = document.createElement('div')

        let photoInCart = document.createElement('img')
        photoInCart.src = item.photos[0]
        photoInCart.classList.add('photoInCart')

        let nameInCart = document.createElement('h2')
        nameInCart.innerText = item.title

        let priceInCart = document.createElement('h3')
        priceInCart.innerText = `$${item.price}.00`
        priceInCart.style.color = 'grey'

        let counterDiv = document.createElement('div')
        counterDiv.classList.add('counterDiv')

        let minus = document.createElement('div')
        minus.innerHTML = `<i id="${item.id}" class="fas fa-minus"></i>`
        minus.style.cursor = 'pointer'

        let counter = document.createElement('div')
        counter.innerText = item.counter
        counter.classList.add('counter')
        counter.setAttribute('id', 'item.id')

        let plus = document.createElement('div')
        plus.innerHTML = `<i id="${item.id}" class="fas fa-plus"></i>`
        plus.style.cursor = 'pointer'

        let totalOfProduct = document.createElement('h3')
        totalOfProduct.innerText = `$${item.totalPrice}.00`
        totalOfProduct.style.color = 'red'

        cartBox.appendChild(productInCart)
        productInCart.appendChild(emptyDiv1)
        emptyDiv1.appendChild(close)
        productInCart.appendChild(emptyDiv)
        emptyDiv.appendChild(photoInCart)
        productInCart.appendChild(nameInCart)
        productInCart.appendChild(priceInCart)
        productInCart.appendChild(counterDiv)
        counterDiv.appendChild(minus)
        counterDiv.appendChild(counter)
        counterDiv.appendChild(plus)
        productInCart.appendChild(totalOfProduct)

        minus.addEventListener('click', minusOne)
        plus.addEventListener('click', plusOne)
        close.addEventListener('click', closeCard)

    })
}

function minusOne(event){
    // console.log(event)
    products.map((x,index) => {
        if(x.id === event.target.id){
            if (x.counter < 2) {
                closeCard(event)
            }
            if(x.counter >= 2){
                event.path[2].children[1].innerText = x.counter
                event.path[3].children[4].innerText = x.totalPrice
                products[index].counter--
                x.totalPrice -= Number(x.price)
                updateCartBank(itemsInCart)
            }
            
        }
    })
    showItemInCart()
}

function plusOne(event){
    // console.log(event)
    products.map((x,index) => {
        if(x.id === event.target.id){
            if (x.counter <= x.stock){
                event.path[2].children[1].innerText = x.counter
                event.path[3].children[4].innerText = x.totalPrice
                products[index].counter++
                x.totalPrice += Number(x.price)
                updateCartBank(itemsInCart)
            }
        }
    })
    showItemInCart()
}

function closeCard(event){
    // console.log(event)
    itemsInCart = itemsInCart.filter(x => x.id !== event.target.id)
    // console.log('this code is not finished')
    showItemInCart()
    updateCartBank(itemsInCart)
}

function removeRedBoarder() {
    selectSize.style.border = 'none'
}