console.log(`1.Вёрстка валидная +10
        2.Вёрстка семантическая +24.(<header>, <main>, <footer>, семь <section>, 
        только один <h1>, шесть <h3>, два <nav>, три списка ul > li > a,
        тринадцать кнопок button, три input type="radio", два input type="number",
        два input type="range", для всех <img> указанb alt)
        3.Вёрстка соответствует макету +45
        4.Форма покупки билетов +22
        5.Требования к css +18
        6.Интерактивность, реализуемая через css +25`)
const ticketsForm = document.querySelector('.tickets__form')
const buttonClose = document.querySelector('.booking-tickets__close')
const buttonOpen = document.querySelector('.form__submit')
const elemTicketContainer = document.querySelector('.booking-tickets-container')
const elemTicketElem = document.querySelector('.booking-tickets')
ticketsForm.addEventListener('submit', (event) => { event.preventDefault(); })
elemTicketContainer.onclick = function (event) {
        let target = event.target;
        event.preventDefault();
        if (target.classList.contains('booking-tickets__close')) {
                elemTicketContainer.classList.add('none');
        } else if (target.classList.contains('booking-tickets-container')) {
                elemTicketContainer.classList.add('none');
        }
        else return
}
buttonOpen.addEventListener('click', (event) => { elemTicketContainer.classList.remove('none') });