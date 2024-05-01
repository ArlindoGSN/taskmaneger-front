/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                prymary: '#030A8C',
                secondary: '#173673',
                tertiary: '#448FF2',
                quaternary: '#41A0F2',
            },
        },
    },
    plugins: [],
};
