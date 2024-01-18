module.exports = {
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            borderColor: {
                DEFAULT: '#656565'
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: theme('fontSize.3xl'),
                        },
                        h2: {
                            fontSize: theme('fontSize.2xl'),
                        },
                        h3: {
                            fontSize: theme('fontSize.xl'),
                        },
                        h4: {
                            fontSize: theme('fontSize.lg'),
                        },
                        h5: {
                            fontSize: theme('fontSize.base'),
                        },
                        h6: {
                            fontSize: theme('fontSize.sm'),
                        },
                        pre: {
                            backgroundColor: '#040306'
                        }
                    },
                },
            }),
        }
    },
    daisyui: {
        logs: false,
        themes: [
            {
                mytheme: {
                    "primary": "#d00171",
                    "secondary": "#9a278f",
                    "accent": "#004da8",
                    "neutral": "#999999",
                    "base-100": "#1b172d",
                    "base-200": "#0d0b16",
                    "base-300": "#040306",
                    "base-content": "#fbfdfd",
                },
            }
        ],
    },
};
