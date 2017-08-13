import $ from "jquery"

export default class fixedMenu {
    constructor(){
        $(document).on('scroll', () =>{
            ($(document).scrollTop() > 1) ? $('nav').addClass('active') : $('nav').removeClass('active')
        })
    }
    
}


