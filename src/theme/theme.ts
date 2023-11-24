import {DefaultTheme} from "styled-components";

export const theme: DefaultTheme = {
        colors: {
            accent: {
                l1: 'rgba(96,162,225,0.5)',
                l2: '#45709c',
            },
            background: {
                l1: 'rgb(240, 240, 240)',
                l2: 'rgb(250, 250, 250)',
                l3: 'rgb(255, 255, 255)',
            },
            text: {
                l1: '#2d2d2d',
                l2: 'rgba(45,45,45,0.83)',
            },
            error: {
                l1: '#df38324d',
                l2: '#ff5454',
            },
            success: {
                l1: '#68b468',
            }
        },
        shadow: {
            l1: '0 0 15px 3px lightgrey',
            l2: '0 0 20px 3px lightgrey',
        },
        border: {
            radius: '12px'
        }
    }

;