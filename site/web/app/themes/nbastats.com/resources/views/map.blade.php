{{--
  Template Name: Map
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.components.arena-map')

  @endwhile
@endsection
