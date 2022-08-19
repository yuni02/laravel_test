@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            {{-- 뷰 --}}
            {{-- <example-component/> --}}
            <create-post />
        </div>
        <div class="col-md-6 posts-container" style="height: 35rem; overflow-y: scroll">
            {{-- 뷰 --}}
            <all-posts />
        </div>
    </div>
</div>
@endsection
