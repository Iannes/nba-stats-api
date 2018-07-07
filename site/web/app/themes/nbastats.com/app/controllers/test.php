<?php

namespace App;

use Sober\Controller\Controller;

use GuzzleHttp\Client;

class Test extends Controller
{

  public function hero() {

    $data = [];

    $data = (object) array(

        'hero_image'    => get_field('hero_image')['sizes']['large'],
        'hero_text'     => get_field('hero_text')
    );

    return $data;
 }

}
