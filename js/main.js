

  // Pindah
  $('.goTo').click(function(e){
    const tujuan = $(this).attr('href');
    const Elementtujuan = $(tujuan);


    $('html , body').animate({
      scrollTop: Elementtujuan.offset().top - 60
     });



    e.preventDefault();

  })
  

  // Scroll


    //Scroll Tampil
    $('.animate-box').waypoint(function(direction){
    if( direction === 'down' && !$(this.element).hasClass('animated') ) {


      $(this.element).addClass('item-animate');
      setTimeout(function(){
        $('body .animate-box.item-animate').each(function(e){
          var el = $(this);
						setTimeout( function () {
								el.addClass('fadeInUp animated');
							  el.removeClass('item-animate');
						},  e * 200, 'easeInOutExpo' );
        })
      },100)

    }

  } , {offset: '85%'} )


    // Event saat gambar diklik
    $('.wadahPortofolio').on('click' , '.imgPortofolio'   ,  function(e){
      let modal = $('.modal-fael');
      $(modal).css('display' , 'flex')
      console.log(modal)
      $(modal).children().children('.modal-fael-gambar').attr('src' , this.src)
      
      //buat animasi
      $( modal ).animate({
          opacity: 1,
        }, 500 ); 

      // Animasi Content
      $(modal).children('.content').animate({
        top: "0px"
      },500)

    })

    // Event saat tombol close modal diklik
    $('.modal-close').click(function(){
      let modal = $('.modal-fael');
      
      //buat animasi
      $(modal).animate({
        opacity: "0"
      },500)

      //animasi content
      $(modal).children('.content').animate({
        top: "-100px"
      },500)

      //tunggu beberapa saat lalu ubah kembali modal menjadi none
      setTimeout(function(){
        $(modal).css('display' , 'none')
      },500)
    })





    //Event gerak
    $('#owlPertama').owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      dots: false,
      stagePadding: 20,
      responsiveClass: !0,
      margin: 30,
      autoplay: true,
      navText: ['<i class="fas fa-arrow-left portofolio-prev portofolio-nav"></i>', '<i class="fas fa-arrow-right portofolio-next portofolio-nav"></i>']//Element nav
      ,animateOut: 'fadeOut',
      animateIn: 'fadeIn'

    })

    let $featureLinks = $('.feature-link');
    $('.owl-carousel').on("changed.owl.carousel", function (e){
            var o = e.item.index+ 1 - e.relatedTarget._clones.length / 2,
                n = e.item.count;
            (o > n || 0 == o) && (o = n - o % n), o--;
            var t = $(".feature-link:nth(" + o + ")");
            $featureLinks.removeClass("active");
            t.addClass("active").fadeIn('slow')
        })

    $featureLinks.on("click", function () {
            var e = $(this).data("owl-items");
            $('.owl-carousel').trigger("to.owl.carousel", e), a($(this));
        });
    


    $('#owlKedua').owlCarousel({
      animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: false,
		   loop:true,
		   margin:0,
		   nav: false,
		   dots: true,
		   autoHeight: true,
		   mouseDrag: false,
		   autoplayHoverPause: true,
		   items: 1
    })
