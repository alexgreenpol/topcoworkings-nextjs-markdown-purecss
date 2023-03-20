import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
