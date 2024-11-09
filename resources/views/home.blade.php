@extends('layouts.app')

@section('content')
<div class="container mx-auto">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-babyblue text-textdark shadow-lg rounded-lg">
                <div class="card-header bg-darkblue text-white font-bold p-4 rounded-t-lg">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert bg-green-500 text-white font-semibold p-4 rounded mb-4" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <p class="text-textdark">{{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
