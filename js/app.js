$.fx.speeds._default = 1000;

$(document).ready(function() { 


/*Список рекомендованых товаров*/
var RecomendationWaresList = [
	  { Image: 'Samsung-Galaxy_mob1.png', name: 'Samsung S5570 Galaxy Mini', price: '7 300' },
	  { Image: 'HTC_mob2.png', name: 'HTC Sensation', price: '20 300' },
	  { Image: 'Samsung_mob3.png', name: 'Samsung S7070  Diva', price: '8 500' },
	  { Image: 'Samsung-Galaxy_mob1.png', name: 'Samsung S5570 Galaxy Mini', price: '7 300' },
	  { Image: 'HTC_mob2.png', name: 'HTC Sensation', price: '20 300' },
	  { Image: 'Samsung_mob3.png', name: 'Samsung S7070  Diva', price: '8 500' }
];

/*Новые товары*/
var NewWaresList = [
	  { Image: 'Nikon-Coolpix-S6150-B-2.200x200.png', name: 'Nikon Coolpix S100', price: '9 000' },
	  { Image: 'Canon-PowerShot-A3200-IS-Orange.200x200.png', name: 'Canon PowerShot A3200 IS', price: '5 500' },
	  { Image: 'Nikon-Coolpix-S6150-B-2.200x200.png', name: 'Nikon Coolpix L120', price: '11 000' }
];

/*Акционные товары*/

var ActionWaresList = [
  { Image: 'Zelmer_prod_1.png',
   name: 'Zelmer 481.64', 
   OldPrice: '4 000',
   price: '3 700' 
   },
   
     { Image: 'Zelmer_prod_2.png',
   name: 'Zelmer 481.67', 
   OldPrice: '4 000',
   price: '3 700' 
   },
   
     { Image: 'Zelmer_prod_3.png',
   name: 'Zelmer 481.4', 
   OldPrice: '3 500',
   price: '2 900' 
   }

];



/*Шаблон для товаров*/

 $.template('WaresTempl', '<!--        Товар.............................. --><li><!--        Картинка.............................. --><figure> <img src="images/${Image}"  alt="${name}" class="center-block"/> </figure><!--            Описанние.............................. --><figcaption> <!--            название.............................. --> <p class="name text--color-mark">${name}</p><!--            Цена.............................. --><p class="price" >${price} руб</p></figcaption><!-- Кнопка -->        <input type="button" value="добавить товар в корзину" class="text-uppercase"></li>');
 
 
 
 /*Шаблон для акционных товаров*/

 $.template('ActionWaresTempl', '<!--        Товар.............................. --><li><!--        Картинка.............................. --><figure> <img src="images/${Image}"  alt="${name}" class="center-block"/> </figure><!--            Описанние.............................. --><figcaption> <!--            название.............................. --> <p class="name text--color-mark">${name}</p><!--            Цена.............................. --><p class="price" > <span class="discont" >${OldPrice}</span>  ${price} руб</p></figcaption><!-- Кнопка -->        <input type="button" value="добавить товар в корзину" class="text-uppercase"></li>');

/*Вставка шаблонов*/

/* Рекоменлуемые */
 $.tmpl('WaresTempl', RecomendationWaresList).appendTo('.js-RecomendationWares');
 
 /* Новые */
 $.tmpl('WaresTempl', NewWaresList).appendTo('.js-NewWares'); 
 
 /* Акционные */
  $.tmpl('ActionWaresTempl', ActionWaresList).appendTo('.js-ActionWares'); 
 
 
 /* 	Выбор товара */
 
/* Помечаем один из элементов*/
 $('.wares:first li:nth-child(2)').addClass("js_wares_selection");	
	
	$('.wares input[type="button"]').
	click(function(){
	$(this).parent("li").toggleClass("js_wares_selection");	
	});



$('.wares input[type="button"]').
	click(function(){

	});
	
$('.top_switch-meni').click(function() {
$('nav ul').toggle();
$(this).toggleClass("switch-meni--show");

});


 });