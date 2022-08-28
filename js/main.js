// Слайдер каталога
(() => {
    const list = document.querySelector('.catalog-list')
    const items = list.children
    const buttons = document.querySelectorAll('.catalog-button')

    let itemCouner = 0

    const step = items[0].clientWidth

    items[0].dataset.active = 'true'

    buttons[0].addEventListener('click', () => {
        console.log(itemCouner)
        if (itemCouner === 0) {
            return
        }
        itemCouner --
        console.log('left')
        for (let i = itemCouner + 1; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i - 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }

    })

    buttons[1].addEventListener('click', () => {
        if (itemCouner === items.length -1 ) {
            console.log('return')
            return
        }
        console.log('right')
        itemCouner ++
        for (let i = 0; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i + 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }  
    })

})();

//слайдер для отзывов
(() => {
    const list = document.querySelector('.reviews-list')
    const items = list.children
    const buttons = document.querySelectorAll('.reviews-button')
    console.log(buttons)

    let itemCouner = 0

    const step = items[0].clientWidth

    items[0].dataset.active = 'true'

    buttons[0].addEventListener('click', () => {
        console.log('click')
        if (itemCouner === 0) {
            return
        }
        itemCouner --
        console.log('left')
        for (let i = itemCouner + 1; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i - 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }

    })

    buttons[1].addEventListener('click', () => {
        if (itemCouner === items.length -1 ) {
            console.log('return')
            return
        }
        console.log('right')
        itemCouner ++
        for (let i = 0; i < items.length; i++){
            if (items[i].dataset.active === 'true') {
                items[i].dataset.active = 'false'
                items[i + 1].dataset.active = 'true'
                list.style.transform= `translateX(-${step*itemCouner}px)`
                break
            }
        }  
    })
})();

// cлайдшоу
(() => {
    const slides = document.querySelector('.hero-banner-list')
    const items = document.querySelectorAll('.hero-banner')
    const delay = Number(slides.dataset.timer)
    console.log(items[0].classList)

    setInterval(() => {
        for (let i = 0; i < items.length; i++){
            if (items[i].classList.contains('is-hidden')) {
                items[i].classList.remove('is-hidden')
                if (!items[i + 1]) {
                    items[0].classList.add('is-hidden')
                    break
                }
                items[i + 1].classList.add('is-hidden')
                console.log(items[i + 1])
                break
            }
        }
    }, delay)

})();