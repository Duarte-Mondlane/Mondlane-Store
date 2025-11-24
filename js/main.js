
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });



})(jQuery);
// Sistema de Autenticação Global
async function fetchUserProfile() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('Nenhum token encontrado');
      return null;
    }

    const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response.status);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return null;
  }
}

// Exibição do Nome do Usuário (Versão Robustecida)
async function displayUserProfile() {
  const profileElement = document.getElementById('user-name');
  if (!profileElement) {
    console.error('Elemento #user-name não encontrado no DOM');
    return;
  }

  // 1. Tenta do localStorage
  let userName = localStorage.getItem('userName');
  console.log('Nome do localStorage:', userName);

  // 2. Se não existir, busca da API
  if (!userName) {
    console.log('Buscando dados da API...');
    const userData = await fetchUserProfile();
    
    if (userData?.name) {
      userName = userData.name;
      localStorage.setItem('userName', userName);
      console.log('Nome atualizado via API:', userName);
    }
  }

  // Exibição final
  if (userName) {
    profileElement.textContent = userName;
    profileElement.style.display = 'block';
    console.log('Nome exibido com sucesso:', userName);
  } else {
    profileElement.style.display = 'none';
    console.log('Nenhum usuário logado - elemento ocultado');
  }
}

// Eventos (Garanta que estão registrados)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado - iniciando displayUserProfile');
  displayUserProfile();
});

window.addEventListener('storage', (event) => {
  if (event.key === 'userName') {
    console.log('Storage alterado - atualizando nome');
    displayUserProfile();
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const guestIcon = document.getElementById('guestIcon');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('user-name');

    // Verificar estado de login
    function checkAuthState() {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('userName');

        if (token && name) {
            // Usuário logado
            guestIcon.style.display = 'none';
            userProfile.style.display = 'flex';
            userName.textContent = name;
            loadProfileDetails();
        } else {
            // Usuário não logado
            guestIcon.style.display = 'flex';
            userProfile.style.display = 'none';
        }
    }

    // Carregar detalhes do perfil (para dropdown)
    async function loadProfileDetails() {
        try {
            const response = await fetch('/api/user', {
                headers: { 
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            });

            if (response.ok) {
                const user = await response.json();
                document.getElementById('dropdown-name').textContent = user.name;
                document.getElementById('dropdown-email').textContent = user.email;
            }
        } catch (error) {
            console.error('Erro ao carregar perfil:', error);
        }
    }

    // Runtime: conversão de USD -> MZN e traduções pontuais (fallback não-destrutivo)
    (function () {
        const USD_TO_MZN = 61; // taxa fixa solicitada
        const CURRENCY_LABEL = 'MZN';
        const dollarRegex = /\$([0-9]+(?:\.[0-9]{1,2})?)/g;

        function convertDollarString(match, g1) {
            const value = parseFloat(g1);
            if (isNaN(value)) return match;
            const mzn = Math.round(value * USD_TO_MZN);
            return `${mzn} ${CURRENCY_LABEL}`;
        }

        // Processa nós de texto
        function processTextNodeText(text) {
            if (!text) return text;
            // substituir valores em dólares
            let out = text.replace(dollarRegex, convertDollarString);
            // traduções pontuais (exemplos comuns) - pt-PT
            out = out.replace(/Free shipping for standard order over \$100/gi, 'Envio gratuito para encomendas superiores a 6100 MZN');
            out = out.replace(/View Cart/gi, 'Ver Carrinho');
            out = out.replace(/Check Out/gi, 'Finalizar Encomenda');
            out = out.replace(/Your Cart/gi, 'Seu Carrinho');
            out = out.replace(/Search\.{3}/gi, 'Pesquisar...');
            out = out.replace(/All Products/gi, 'Todos os Produtos');
            out = out.replace(/My Account/gi, 'Minha Conta');
            return out;
        }

        function walk(node) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
            const textNodes = [];
            let n;
            while (n = walker.nextNode()) {
                textNodes.push(n);
            }
            textNodes.forEach(tn => {
                const orig = tn.nodeValue;
                const replaced = processTextNodeText(orig);
                if (replaced !== orig) tn.nodeValue = replaced;
            });
        }

        function processAttributes(root) {
            const attrs = ['placeholder','title','alt','value'];
            const elements = root.querySelectorAll('*');
            elements.forEach(el => {
                attrs.forEach(a => {
                    if (el.hasAttribute && el.hasAttribute(a)) {
                        const v = el.getAttribute(a);
                        if (v) {
                            const nv = processTextNodeText(v);
                            if (nv !== v) el.setAttribute(a, nv);
                        }
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            try {
                walk(document.body);
                processAttributes(document.body);
            } catch (e) {
                console.error('Erro no conversor runtime de moeda/texto:', e);
            }
        });
    })();

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', function() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        checkAuthState(); 
       // window.location.href = '/login';
    });

    // Mobile: Toggle dropdown
    userProfile?.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.querySelector('.profile-dropdown');
            const isVisible = dropdown.style.opacity === '1';
            dropdown.style.opacity = isVisible ? '0' : '1';
            dropdown.style.visibility = isVisible ? 'hidden' : 'visible';
        }
    });

    // Inicialização
    checkAuthState();
});