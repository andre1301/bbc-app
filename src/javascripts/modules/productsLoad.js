import $ from 'jquery'

export default class productsLoad {
    constructor(){
        this.productsList = $(".products-list");
        this.buttonLoadMore = $(".btn--load-more");
        this.offset = 1;
        this.ajaxRequest(this.offset);
        this.loadMore()
    }

    ajaxRequest(offset) {
        $.get(`/Products.php/${offset}`)
        .done((data) => {
            let listObject = JSON.parse(data);
            (listObject.length < 3) ? this.loadMoreHide(): '' ;
            let html = [];
            listObject.forEach((prod,i) => {
                 html[i] = this.htmlGenerate(prod);
            });
                this.productsList.append(html);
                this.offset++;
        }) 
    }

    htmlGenerate(product) {
         return ` 
            <a href="${product.url}" class="product__link">
                <h2 class="product__title">${product.name}</h2>
                <img src="images/${product.image}" alt="${product.name}">
                <p class="product__price">${product.price.value} ${product.price.currency}</p>
                <div class="product__overlay">
                <p class="product__desc">
                    Ekran: ${product.information.display}<br/>
                    Aparat: ${product.information.camera}<br/>
                    Bateria: ${product.information.battery}<br/>
                    ${product.information.memory}<br/>
                </p>
                <div class="product__buttons">
                    <button class="btn btn--cart"><svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.68 22.68"><title>a</title><path d="M4.67,19.12a2.22,2.22,0,1,0,2.22-2.22A2.22,2.22,0,0,0,4.67,19.12Zm11.11,0A2.22,2.22,0,1,0,18,16.89,2.22,2.22,0,0,0,15.78,19.12ZM8.61,13.86l12.3-3.51a0.63,0.63,0,0,0,.43-0.57V3.67H5.67V1.78a0.45,0.45,0,0,0-.44-0.44H1.78a0.45,0.45,0,0,0-.44.44V3.56H3.5L5.68,13.62l0.21,1v1.67a0.45,0.45,0,0,0,.44.44H20.89a0.45,0.45,0,0,0,.44-0.44V14.67H8.84C7.56,14.67,7.54,14.17,8.61,13.86Z"/></svg></button>
                    <button class="btn btn--compare">Porównaj</button>
                </div>
                </div>
            </a>`;
    }

    loadMore() {
        this.buttonLoadMore.on("click", () => {
            this.ajaxRequest(this.offset);
        });
    }

    loadMoreHide() {
        this.buttonLoadMore.addClass("hidden");
    }   
}