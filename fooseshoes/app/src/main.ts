import '@styles/main.scss';
// import typescriptLogo from './typescript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header class="header clearfix">
      <div class="wrapper">
        <div class="logo">
          <a href="#">
            <img
              src="/src//src/assets/images/header_logo.png"
              alt="fooshoes"
              width="156"
              height="20"
            />
          </a>
        </div>

        <div class="header-bar">
          <button class="search">
            <img
              src="/src/assets/images/header_search_icon.png"
              alt="search"
              width="14"
              height="14"
            />
          </button>
          <div class="login">
            <a href="#">login</a>
            <span>or</span>
            <a href="#">register</a>
          </div>
        </div>
      </div>
    </header>

    <nav class="menu clearfix">
      <div class="wrapper">
        <ul class="menu-list">
          <li><a href="">home</a></li>
          <li><a href="">products</a></li>
          <li><a href="">about</a></li>
          <li><a href="">pages</a></li>
          <li><a href="">blog</a></li>
          <li><a href="">contacts</a></li>
        </ul>

        <ul class="menu-bar">
          <li class="menu-wishlist">
            <a href="#">
              <img src="/src/assets/images/menu_star_icon.png" alt="" />
              <div class="menu-wishlist__total">30</div>
            </a>
          </li>
          <li class="menu-cart">
            <a href="#">
              <img src="/src/assets/images/menu_cart_icon.png" alt="" />
              <div class="menu-cart__total">0</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="slider-container">
      <div class="slider">
        <img class="slider__img" src="/src/assets/images/top_bg.jpg" alt="" />
        <div class="slider-inner">
          <div class="price">$145,99</div>
          <h1 class="slider-inner__title">
            Pink Shoes<br />
            2013 Collection
          </h1>
          <p class="slider-inner__description">
            Nunc non fermentum nunc. Sed ut ante <br />
            eget leo tempor consequat sit amet eu orci. Donec dignissim dolor
            eget..
          </p>
          <ul class="slider-inner__action">
            <li>
              <a href="#"><img src="/src/assets/images/top_eye_icon.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="/src/assets/images/top_star_icon.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="/src/assets/images/top_share_icon.png" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="/src/assets/images/top_cart_icon.png" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="slider-nav">
        <div class="wrapper">
          <div class="slider-nav__line">
            <div class="slider-nav__bar"></div>
          </div>
          <ul class="slider-list">
            <!--
				  <div class="slider-line">
					<div class="slider-bar"></div>
				  </div>
			-->
            <li class="active">
              <a>Pink Shoes<br /><span>Now af $145,99</span></a>
            </li>
            <!--				  <img class="slider-nav__divider" src="/src/assets/images/divider.png" alt="" />-->
            <li>
              <a>Anna Field<br /><span>Limited Edition</span></a>
            </li>
            <!--				  <img class="slider-nav__divider" src="/src/assets/images/divider.png" alt="" />-->
            <li>
              <a>Prada<br /><span>Summer is coming</span></a>
            </li>
            <!--				  <img class="slider-nav__divider" src="/src/assets/images/divider.png" alt="" />-->
            <li>
              <a>Casadei<br /><span>All Colors avaiable</span></a>
            </li>
            <!--				  <img class="slider-nav__divider" src="/src/assets/images/divider.png" alt="" />-->
            <li>
              <a>Mellow Yellow<br /><span>Free delivery</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="specials">
      <div class="wrapper">
        <div class="specials-item">
          <img src="/src/assets/images/specials_onSale.jpg" alt="" />
          <div class="specials-item__title">
            <a href="#">on sale</a>
          </div>
        </div>
        <div class="specials-item">
          <img src="/src/assets/images/specials_offer.jpg" alt="" />
          <div class="specials-item__title">
            <a href="#">special offers</a>
          </div>
        </div>
        <div class="specials-item">
          <img src="/src/assets/images/specials_mastHave.jpg" alt="" />
          <div class="specials-item__title">
            <a href="#">must have</a>
          </div>
        </div>
      </div>
    </div>
    <main class="main-content">
      <section class="promo wrapper">
        <header class="promo-header clearfix">
          <h2>New arrivals on FooseShoes</h2>
          <a class="promo-header__btn">show all</a>
        </header>
        <div class="product-container">
          <div class="product-item">
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/newArrivals_item1.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <h4 class="product-title">Even&Odd</h4>
          </div>

          <div class="product-item">
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/newArrivals_item2.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <h4 class="product-title">Even&Odd</h4>
            <div class="product-tumb__promo">
              <p>on sale!</p>
            </div>
          </div>
          <div class="product-item">
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/newArrivals_item3.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <h4 class="product-title">Bullo Decollete</h4>
          </div>
        </div>
      </section>

      <section class="promo wrapper">
        <header class="promo-header clearfix">
          <h2>New arrivals on FooseShoes</h2>
          <a class="promo-header__btn">show all</a>
        </header>
        <div class="product-container">
          <div class="product-item">
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/bestSeller_item1.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <div>
              <div class="product-action">
                <button type="button" data-original-title="View">
                  <img src="/src/assets/images/top_eye_icon.png" alt="" />
                </button>
                <button type="button" data-original-title="Wishlist">
                  <img src="/src/assets/images/top_star_icon.png" alt="" />
                </button>
                <button type="button" data-original-title="Share">
                  <img src="/src/assets/images/top_share_icon.png" alt="" />
                </button>
                <button type="button" data-original-title="Buy">
                  <img src="/src/assets/images/top_cart_icon.png" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div class="product-item">
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/bestSeller_item2.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <h4 class="product-title">Even&Odd</h4>
          </div>
          <div class="product-item">
            <div class="product-tumb__promo orange">
              <p>out of stock</p>
            </div>
            <div class="product-img">
              <a href="#"
                ><img src="/src/assets/images/bestSeller_item3.jpg" alt="" height="220"
              /></a>
            </div>
            <div class="price"><span>$145,99</span></div>
            <h4 class="product-title">Bullo Decollete</h4>
          </div>
        </div>
      </section>

      <div class="addons wrapper">
        <div class="addons-block">
          <h3 class="addons-title">free shipping</h3>
          <p class="addons-text">
            Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel
            nibh. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Donec erat sem,
          </p>
        </div>

        <div class="addons-block">
          <h3 class="addons-title">testimonials</h3>
          <p class="addons-text">
            vel, vulputate vel nibh. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Donec erat sem,
            vehicula id dictum sit <a>[...]</a>
          </p>
          <address class="testimonials-autor">- John Doe -</address>
        </div>

        <div class="addons-block">
          <h3 class="addons-title">blog news</h3>
          <a class="news" href="#">
            <div class="news-date">apr 01</div>
            <h4 class="news-title">Nice & clean. The best for you blog!</h4>
            <p class="news-text">
              Vivamus metus turpis, bibendum vitae euismod vel
            </p>
          </a>
          <a class="news" href="#">
            <div class="news-date">apr 01</div>
            <h4 class="news-title">What an Ecommerce theme!</h4>
            <p class="news-text">
              Vulputate vel nibh. Class aptent taciti sociosqu ad litora
            </p>
          </a>
        </div>
      </div>
    </main>
    <div class="prefooter">
      <div class="widgets wrapper">
        <div class="widget-inline">
          <h3 class="widgets-title">text widget</h3>
          <p class="widget-text__text">
            Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit.
          </p>
        </div>

        <div class="widget-inline">
          <h3 class="widgets-title">twitter widget</h3>
          <div class="widget-twitter__box">
            <p class="widget-twitter__box-links">
              <a href="#"
                ><span>@ericafustero</span> Why thank you. Your work looks
                awesome by the way! <span>@treemelody</span></a
              >
            </p>
            <div class="widget-twitter__box-date">
              <a href="#">19 days ago</a>
            </div>
            <p class="widget-twitter__box-links">
              <a href="#"
                ><span>@roymarvelous</span> You can seek a refund through TF if
                it is not as advertised - but it is :)</a
              >
            </p>
            <div class="widget-twitter__box-date">
              <a href="#">21 days ago</a>
            </div>
          </div>
        </div>

        <div class="widget-inline">
          <h3 class="widgets-title">flickr widget</h3>
          <ul class="widget-flickr__list">
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item1.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item2.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item3.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item4.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item5.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="" class="widget-flickr__links"
                ><img src="/src/assets/images/flickr_item6.jpg" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>

      <img class="prefooter-divider" src="/src/assets/images/prefooter-divider.png" alt="" />

      <div class="prefooter-bottom wrapper">
        <form action="send.php" class="prefooter-form">
          <input
            class="prefooter-form__field"
            type="email"
            name="EMAIL"
            placeholder="Enter email for newsletter"
          /><input
            class="prefooter-form__btn"
            type="submit"
            name="subscribe"
            value=""
          />
        </form>
        <ul class="prefooter-social">
          <li>
            <a href="" class="prefooter-socials__link"
              ><img src="/src/assets/images/social_fb.png" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="prefooter-socials__link"
              ><img src="/src/assets/images/social_tw.png" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="prefooter-socials__link"
              ><img src="/src/assets/images/social_goo.png" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="prefooter-socials__link"
              ><img src="/src/assets/images/social_li.png" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="prefooter-socials__link"
              ><img src="/src/assets/images/social_fk.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-wrapper clearfix">
        <p class="footer-copy">
          Copyright © Fooseshoes 2013. <br />Designed by EnzoLiVolti.
        </p>
        <nav class="footer-nav">
          <ul class="footer-nav__list">
            <li><a href="">Home</a>/</li>
            <li><a href="">Support</a>/</li>
            <li><a href="">Terms and Conditions</a>/</li>
            <li><a href="">Faqs</a>/</li>
            <li><a href="">Contact us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
`;
