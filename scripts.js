const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all') // Selecionando o botão de mostrar todos
const buttonMapAll = document.querySelector('.map-all') // Selecionando o botão de mapear
const sumAll = document.querySelector('.sum-all') // Selecionando o botão de somar
const filterAll = document.querySelector('.filter-all') // Selecionando o botão de filtrar

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}


function showAll(productsArray) {
    let myLi = '' // Inicializando a variável 

    productsArray.forEach((product) => {
        myLi += `
        
        <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>
        `
    });

    list.innerHTML = myLi // Atualizando a lista com os itens
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)

    console.log(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li> 
        <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
    </li>
     `
}

function filterAllItens() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItens)