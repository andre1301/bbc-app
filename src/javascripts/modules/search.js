import $ from 'jquery'

export default class search {
    constructor(el ){
        this.$searchContainer = $(".search__container");
        this.$searchInput = $(".search__input");
        this.$searchForm = $(".search__form");

        $(el).on('click',() => {
            if(!this.hasClass()) {
                this.$searchContainer.addClass("active");        
            }
            else if(!this.inputValLength()) {
                this.$searchContainer.removeClass("active"); 
                  $(".product__link").removeClass("hidden"); 

            }
            else {
                this.$searchForm.submit();
            }
        })

       this.$searchForm.on('submit', (e) => {
            e.preventDefault()
            this.productsFilter(this.$searchInput[0].value);
            this.scrollToProducts();
            $(".navigation__mobile").removeClass('opened');
           
       })

    }

    hasClass() {
        return this.$searchContainer.hasClass("active");
    } 

    inputValLength() {
        return this.$searchInput.val();
    }

    productsFilter(str) {
        let productsToHide = $(".product__title").filter((i,e) => {
            return e.innerHTML.toLowerCase().indexOf(str.toLowerCase()) == -1
        })
        $(".product__link").removeClass("hidden");
        productsToHide.parent().addClass('hidden');
    }

    scrollToProducts() {
         $('html, body').animate({
            scrollTop: $(".filter").position().top -100
        }, 500);
    }
    
}