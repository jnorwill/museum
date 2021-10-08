console.log(`150/150
1.Вёрстка соответствует макету. Ширина экрана 1024px +40
2.Вёрстка соответствует макету. Ширина экрана 768px +40
3.Вёрстка соответствует макету. Ширина экрана 420px +40
4.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6
5.Совмещается адаптивная и респонсивная (резиновая) вёрстка +14
6.На ширине экрана 1024рх и меньше реализовано адаптивное меню +12
7.Оптимизация скорости загрузки страницы +4`)
const burgerMenuImg = document.querySelector('.burger-menu-img')
const burgerMenu = document.querySelector('.burger-menu')
const ticketsForm = document.querySelector('.tickets__form')
const buttonClose = document.querySelector('.booking-tickets__close')
const buttonOpen = document.querySelector('.form__submit')
const elemTicketContainer = document.querySelector('.booking-tickets-container')
const elemTicketElem = document.querySelector('.booking-tickets')


burgerMenuImg.addEventListener('click', () => { burgerMenuImg.classList.toggle('open')
burgerMenu.classList.toggle('burger-menu-open') 
document.querySelector('.welcome__text-container').classList.toggle('welcome__text-container_opacity')
document.querySelector('.welcome').classList.toggle('welcome-hidden')
});

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