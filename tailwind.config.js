

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#000',
            white: '#fff',
            black: '#000',
            alert: 'red',
        },
        borders: {
            primary: '#000',
            white: '#fff',
            black: '#000',
        },
        extend: {
            colors: {
                primary: '#000',
                secondary: '#fff',
                white: '#fff',
                black: '#000',


            },
            backgroundColor: {
                primary: '#000',
                secondary: '#fff',
                alert: 'red'
            },
            borderColor: {
                primary: '#000',
                secondary: '#fff',
                alert: 'red'
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [require("daisyui")],
}


