const products = document.querySelector('.products')
const searchInput = document.querySelector('.search input')

const Api = 'https://fakestoreapi.com/products'

const getData = async() => {
  const result = await fetch(Api)
  const respon = await result.json()
  const render = respon.map(function(item){
    return `
    <div class="product">
      <img src="${item.image}" alt="">
      <div class="info">
        <p class="name">${item.title}</p>
        <span class="price">$${item.price}</span>
      </div>
    </div>
    `
  })
  const htmls = render.join('')
  products.innerHTML = htmls
  
  // setTimeout(() => {
  // }, 1200)
}

getData()

searchInput.addEventListener('input', (e) => {
  let valueInput = e.target.value.trim().toLowerCase()
  
  let listProduct = document.querySelectorAll('.product')
  listProduct.forEach((product) => {
    if(product.innerText.toLowerCase().includes(valueInput)){
      product.classList.remove('hide')
    }
    else{
      product.classList.add('hide')
    }
  })
})


