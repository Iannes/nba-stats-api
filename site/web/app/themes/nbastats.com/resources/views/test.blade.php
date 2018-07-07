{{--
  Template Name: Test Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.components.banner')
    @include('partials.components.stats-test')
  @endwhile
@endsection
