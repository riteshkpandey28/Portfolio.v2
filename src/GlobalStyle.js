import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
        --maxWidth: 1280px;

        --white: #fff;
        --black: #000;

        // color - grey
        --darkGrey: #1c1c1c;
        --medGrey: #353535;
        --lightGrey: #eee;

        // color - purple
        --darkPurple: #3e065f;
        --medPurple: #700b97;
        --lightPurple: #8e05c2;

        // color - pink
        --darkPink: #86003c;
        --medPink: #e41f7b;
        --lightPink: #ff8ba0;

        // color - cyan
        --darkCyan: #00adb5;
        --lightCyan: #00fff5;

        // font-szie
        --fontSuperBig: 4.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1rem;
        --fontSmall: 0.5rem;

        // font-family
        --fontReputation: 'UnifrakturMaguntia', cursive;
        --font1989: 'Permanent Marker', cursive;
        --fontRed: 'Anton', sans-serif;
        --fontSpeakNow: 'Trochut', cursive;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }

    }
`;
