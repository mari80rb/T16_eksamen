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
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/js/arrow.js', 1.1, true);
}


/*
 * Your code goes below
 */
?>