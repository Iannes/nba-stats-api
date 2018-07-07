<header class="header-nav">
    <section class="navigation-bar">
        <article class="logo-container">
            <a href="/">
              <img src="@asset('images/nav_logoman.svg')" width="140" alt="NBA Stats logo">
            </a>

            <div class="mobile-menu--trigger">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </div>

            <nav class="nav-primary ">
                @if (has_nav_menu('primary_navigation'))
                  {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
                @endif
            </nav>
        </article>
    </section>

    <div id="mobile-nav" class="mobile-menu">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav']) !!}
        @endif
    </div>
  </header>