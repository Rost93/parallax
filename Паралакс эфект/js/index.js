$(document).ready(function(){
  // Функция слушателя скролла
  $(window).scroll(function(event){
    //переменная s сдесь это количество пикселей полчиных при скроле
    var s=$(this).scrollTop();
    // получаем ширину окна
    var w=$(this).outerWidth();
    // получаем высоту контентной части
    var h=$('.content').outerHeight();
    // высота верхнего блока
    var h_b=$('.paralax').outerHeight();
    // процент прокрутки контентной части 
    var p = s/h*100;
    // процент прокрутки верхней части
    var p_b = s/h_b*100;
    // вычисляем не прозрачность
    var o = 1-1/100*p_b;
    // визуализация тумана
    var z_1 = 1+(w/10000*p_b);
    $('.paralax__fog').css('transform','scale('+z_1+')');
    $('.paralax__fog').css('opacity', o);
    // визуализация 1 горы фоновая
    // за скорость увеличения отвечает сдесь чило 5 милилонов
    var z_2= 1+(w/5000000*p); 
    $('.paralax__montain_1').css('transform','scale('+z_2+')');
    // визуализация 2 горы правой части  
    var hr= w/2000*p_b;
    var hr_speed = 6; // коэффициент увеличения скорости
    hr *= hr_speed;
    var z_3= 1+(w*0.000005*p_b);
    $('.paralax__montain_2').css('transform', 'translate3d('+hr+'px,0,0)', 'scale('+z_3+')');
    // визуализация 3 горы
    var hr_2= w/1500*p_b;
    var z_4= 1+(w*0.00001*p_b);
    $('.paralax__montain_3').css('transform', 'translate3d('+hr_2+'px,0,0) scale('+z_4+')');
  });
});
