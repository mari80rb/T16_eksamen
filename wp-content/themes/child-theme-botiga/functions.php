<?php
/*
 * This is the child theme for Botiga theme, generated with Generate Child Theme plugin by catchthemes.
 *
 * (Please see https://developer.wordpress.org/themes/advanced-topics/child-themes/#how-to-create-a-child-theme)
 */
add_action( 'wp_enqueue_scripts', 'child_theme_botiga_enqueue_styles' );
function child_theme_botiga_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')
    );
}

/*
 * Your code goes below
 */

 ?>

<div id="arrow"></div>

<style>
#arrow {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-image: url('wp-content/themes/child-theme-botiga/images/arrows.png');
  background-size: cover;
  z-index: 999;
}

.arrow-up {
  transform: rotate(0deg);
}

.arrow-down {
  transform: rotate(180deg);
}

</style>

<script>
// Vent, indtil DOM'en er indlæst
document.addEventListener("DOMContentLoaded", function() {
  // Hent referencen til pilens HTML-element
  let arrow = document.getElementById("arrow");
  arrow.style.display = "block"; // Vis pilen ved siden af hero-billedet

  let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // Gem den tidligere scrollposition

  // Registrer en eventlistener til at lytte efter scroll-hændelser
  window.addEventListener("scroll", function() {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Hent den aktuelle scrollposition

    let isScrollingUp = currentScrollPosition < prevScrollPosition;
    // Tjek om brugeren scroller opad ved at sammenligne den aktuelle scrollposition med den tidligere

    if (isScrollingUp) {
      // Hvis brugeren scroller opad
      arrow.classList.remove("arrow-down"); // Fjern klasse for pil nedad
      arrow.classList.add("arrow-up"); // Tilføj klasse for pil opad
    } else {
      // Hvis brugeren scroller nedad eller er i ro
      arrow.classList.remove("arrow-up"); // Fjern klasse for pil opad
      arrow.classList.add("arrow-down"); // Tilføj klasse for pil nedad
    }

    prevScrollPosition = currentScrollPosition;
    // Opdater den tidligere scrollposition til den aktuelle værdi for næste sammenligning
  });
});

</script>