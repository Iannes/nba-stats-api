<?php

namespace App;

trait Options
{

  public function options()
  {
    $address = get_field('address', 'options');

    $data = [];

    if($address)
    {

      $data =(object) [
        'address' => $address,
      ];

      return $data;
    }
  }


}