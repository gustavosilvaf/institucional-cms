import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'brand.gray-dark',
                color: 'brand.white',
            },
        },
    },
    fonts: {
        heading: 'Montserrat',
        body: 'Montserrat',
    },
    colors: {
        brand: {
            blue: '#11cdef',
            indigo: '#6610f2',
            purple: '#6f42c1',
            pink: '#e83e8c',
            red: '#f5365c',
            orange: '#ffc31d',
            yellow: '#ffc107',
            green: '#2dce89',
            teal: '#20c997',
            cyan: '#17a2b8',
            white: '#fff',
            gray: '#6c757d',
            'gray-dark': '#343a40',
            primary: '#ffc31d',
            secondary: '#6c757d',
            info: '#11cdef',
            warning: '#ffc107',
            danger: '#f5365c',
            light: '#f8f9fa',
            dark: '#343a40',
            success: '#2dce89',
        },
    },
});
