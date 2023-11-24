import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            accent: {
                l1: string,
                l2: string,
            },
            background: {
                l1: string,
                l2: string,
                l3: string,
            },
            text: {
                l1: string,
                l2: string,
            },
            error: {
                l1: string,
                l2: string
            },
            success: {
                l1: string,
            }
        },
    }
}