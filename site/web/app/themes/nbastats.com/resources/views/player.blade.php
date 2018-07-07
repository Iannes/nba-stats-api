{{--
  Template Name: Player Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.components.banner')
    @include('partials.components.single-stats-table')
  @endwhile
@endsection
