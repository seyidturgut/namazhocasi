tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'arabic': ['UthmanTN', 'system-ui']
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                }
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['dark', 'dark-hover'],
            borderColor: ['dark', 'dark-focus'],
            textColor: ['dark', 'dark-hover']
        }
    }
}
