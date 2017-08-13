import $ from 'jquery'

export default class mobileMenu {
    constructor(el ){
       $(el).on('click',() =>{
           $(".navigation__mobile").toggleClass('opened');
       })
    }
    
}