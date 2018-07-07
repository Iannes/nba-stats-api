<?php

namespace App;

trait Hero

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