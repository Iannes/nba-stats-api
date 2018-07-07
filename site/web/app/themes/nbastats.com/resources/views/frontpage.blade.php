{{--
  Template Name: FrontPage
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.components.hero')
    @include('partials.components.stats-table')
  @endwhile
@endsection
