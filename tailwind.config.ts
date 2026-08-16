module.exports = {
    // Tailwind colors fetched dynamically and used in the UI — safelisted to prevent purging
    safelist: [
        'text-blue-400',
        'text-pink-400',
        'text-cyan-400',
        'text-orange-400',
        'text-white',
        'text-zinc-400',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-manrope)', 'sans-serif'],
                mono: ['var(--font-space-grotesk)', 'sans-serif'],
            },
        },
    },
}