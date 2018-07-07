<?php

namespace App;

use Sober\Controller\Controller;

use JasonRoman\NbaApi\Client\Client;
use JasonRoman\NbaApi\Request\Data\Cms\Teams\SportsMetaTeamsRequest;

class About extends Controller
{

  // https://stackoverflow.com/questions/43302110/how-to-retrieve-api-key-safely-from-env-file-into-javascript-view-laravel
  public function map()
  {
      // Get map field
      $map = get_field('google_maps', 'options')['address'];

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

    // public function stats_callback() {

  //   $client   = new Client(['base_uri' => 'https://stats.nba.com/stats/']);
  //   $query = 'commonallplayers?IsOnlyCurrentSeason=1&Season=2017-18&LeagueID=00';
  //   $response = $client->get($query);
  //   $data     = $response->getBody();
  //   // $data = json_decode($data, true);

  //   return $data;
  // }

}
