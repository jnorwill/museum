console.log(`1.Вёрстка валидная +10
        2.Вёрстка семантическая +24.(<header>, <main>, <footer>, семь <section>, 
        только один <h1>, шесть <h3>, два <nav>, три списка ul > li > a,
        тринадцать кнопок button, три input type="radio", два input type="number",
        два input type="range", для всех <img> указанb alt)
        3.Вёрстка соответствует макету +45
        4.Форма покупки билетов +22
        5.Требования к css +18
        6.Интерактивность, реализуемая через css +25`)
const buttonClose = document.querySelector('.booking-tickets__close')
const buttonOpen = document.querySelector('.form__submit')
const elemContainer = document.querySelector('.booking-tickets-container')
buttonClose.addEventListener('click', (event) => {elemContainer.classList.add('none');
event.preventDefault();})
buttonOpen.addEventListener('click', (event) => {elemContainer.classList.remove('none');
event.preventDefault();})
console.log('buttonOpen')