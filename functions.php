<?php

function singlepage_scripts() {
  wp_register_script( 'bbq', get_stylesheet_directory_uri() . '/js/jquery.ba-bbq.min.js', array('jquery'), '1.2.1', true );
  wp_enqueue_script( 'singlepage', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery', 'bbq'), '20130313-4', true );
}
add_action('wp_enqueue_scripts', 'singlepage_scripts');