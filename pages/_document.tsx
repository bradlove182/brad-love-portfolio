
import React from "react";
import Document, {
    Html,
    Head,
    Main,
    NextScript
} from "next/document";

class MyDocument extends Document{

    render(): React.ReactElement{
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;
