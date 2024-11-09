import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a73e8', // warna biru kustom
                secondary: '#ffcc00', // warna kuning kustom
                babyblue: '#C7E9F7', // warna baby blue
                darkblue: '#79C0E5', // biru gelap
                midblue: '#55A5D6', // biru tengah
                lightblue: '#E3F3FC', // biru muda
                softred: '#E56969', // merah lembut
                textdark: '#2D4A59', // warna teks gelap
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
