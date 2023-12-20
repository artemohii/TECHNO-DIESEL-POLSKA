jQuery(function($) {

      $(window).scroll(function(){

          if ($(window).scrollTop() > 0) {
            $('body').addClass('page__scrolled');
          } else {
            $('body').removeClass('page__scrolled');
          };

      });

      $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        if (id != '#') {
          var top = $(id).offset().top - 50;
          $('body,html').animate({scrollTop: top}, 1000);
        }
    });

      $('.menu-button').on('click',function(event){

        $(this).toggleClass('menu-button_active');
        $('.menu').toggleClass('menu_active');

      });

      $('.answer-button').on('click',function(event){

        $(this).toggleClass('answer-button_active');
        $(this).parent().parent().children('.answer').toggleClass('answer_active');

      });
/*
      $('.dropdown').on('click',function(event){

        event.preventDefault();
        $(this).toggleClass('dropdown_open');

      });
*/
      $(document).mouseup(function (e){
        var div = $(".dropdown"); 
        if (!div.is(e.target)
            && (div.hasClass("dropdown_open")
            && div.has(e.target).length === 0)) {
          div.toggleClass('dropdown_open');
        }
      });

      $(document).mouseup(function (e){
        var div = $(".menu__list"); 
        if (!div.is(e.target) && !$(".menu__list *").is(e.target) && (div.hasClass("menu_active"))) {
          div.toggleClass('menu_active');
          $('.menu-button').toggleClass('menu-button_active');
        }
      });

      $(document).scroll(function (e){
        var div = $(".menu"); 
        if (!div.is(e.target) && (div.hasClass("menu_active"))) {
          div.toggleClass('menu_active');
          $('.menu-button').toggleClass('menu-button_active');
        }
      });

      $('#phone').on('focus',function(event) {
        $("#phone").inputmask({"mask": "+380 (99) 999-99-99"});
      });

      function ValidPhone() {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = document.getElementById('phone').value;
        var valid = re.test(myPhone);
        if (valid) output = 'Номер телефона введен правильно!';
        else output = 'Номер телефона введен неправильно!';
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
        return valid;
    }


      $('#phone').on('blur',function(event) {
        $("#phone").inputmask("remove");
      });

      $('.contact__input').on('focus',function(event){

        $(this).parent().addClass( "contact__field_active" );

      });

      $('.contact__textarea').on('focus',function(event) {

        $(this).parent().addClass( "contact__field_active" );

      });

      $('.contact__input').on('blur',function(event) {
        
        if ($(this).val() == '') {
          $(this).parent().removeClass( "contact__field_active" );
        }

      });
      $('.contact__textarea').on('blur',function(event) {
        
        if ($(this).val() == '') {
          $(this).parent().removeClass( "contact__field_active" );
        }

      });

      var Gallery = new Swiper ('.gallery__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        }
      });

      $('.contact__form').submit(function() {
        event.preventDefault();
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize()
        }).done(function() {
          
          $('.contact__form').trigger('reset');
          $('.contact__field').removeClass( "contact__field_active" );
          
          $('.thank-you').bPopup();
        });
        return false;
      });

});