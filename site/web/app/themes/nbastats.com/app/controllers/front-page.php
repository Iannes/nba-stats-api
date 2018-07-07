<?php

namespace App;

use Sober\Controller\Controller;

use Options;

use GuzzleHttp\Client;

class FrontPage extends Controller
{

  public function hero() {

    $data = [];

    $data = (object) array(

        'hero_image'    => get_field('hero_image')['sizes']['large'],
        'hero_text'     => get_field('hero_text')
    );

  return $data;
 }

  public function map()
  {
      // Get map field
      $map = get_field('address', 'options')['address'];

      // Encode map address to URL friendly format
      $location = urlencode($map);

      // Working API key with 2018 billing changes
      $api_key = $_ENV["GOOGLE_MAP_API_KEY"];

      // Base Google maps embed url with API key
      $maps_base_url = "https://www.google.com/maps/embed/v1/search?key=". $api_key ."&amp;q=";

      // Zoom level -> Accepted values range from 0 (the whole world) to 21 (individual buildings)
      $zoom = '&zoom=18';

      // Join location to base URL
      $maps_url = $maps_base_url . $location . $zoom;

      return $map;
  }


}
