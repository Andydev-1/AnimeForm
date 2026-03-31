/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            colors: {
                'primary': '#334155', // Soft Navy
                'secondary': '#E5E7EB', // Light Gray
                'accent': '#14B8A6', // Teal Green
                'animafront': '#050816', // Deep midnight
                'neonPurple': '#A855F7',
                'neonCyan': '#22D3EE',
                'neonOrange': '#FB923C',
            }
        },
    },
    plugins: [],
};
