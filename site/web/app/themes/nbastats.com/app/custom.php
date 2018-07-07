<?php

use GuzzleHttp\Client;

// Add SVG in Wordpress
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


add_action('acf/init', 'my_acf_init');

function my_acf_init() {

	if( function_exists('acf_add_options_page') ) {

		$option_page = acf_add_options_page(array(
			'page_title' 			=> __('NBA Arenas Map', 'my_text_domain'),
			'menu_title' 			=> __('Contact Details', 'my_text_domain'),
      'menu_slug' 			=> 'contact-details',
      'icon_url' 				=> 'dashicons-location-alt',
		));

	}
}

// Register new WP REST API endpoint (wp-json/nba/stats)
// this file uses Guzzle on top. Make sure you put it on
// bedrock's composer and run composer update
add_action( 'rest_api_init', 'register_endpoint' );

function register_endpoint() {

	register_rest_route( 'nba', '/stats', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'stats_callback'
    ));
}


add_action( 'rest_api_init', 'register_map_endpoint' );

function register_map_endpoint() {

	register_rest_route( 'map', '/v1', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'call_map'
    ));
}

function call_map() {

  $api_key = $_ENV["GOOGLE_MAP_API_KEY"];

  $client = new Client(['base_uri' => 'https://maps.googleapis.com/maps/api/']);
  $response = $client->get('js?key=' . $api_key);
  $data = $response->getBody();
  // $data = json_decode($data, true);

  return $data;
}

// Register Google Map API key with ACF
function my_map_init() {

  $api_key = $_ENV["GOOGLE_MAP_API_KEY"];
	acf_update_setting('google_api_key', $api_key);
}

add_action('acf/init', 'my_map_init');

// Find if page has either parent or child pages
function is_on_tree($pageId) {
  // get global post and load details of the page
  global $post;
  // If is the actual page or it is a parent page
  if( is_page() && ( $post->post_parent==$pageId || is_page($pageId) ) )

    return true;

  else

    return false;
};

add_action('init', 'is_on_tree');




