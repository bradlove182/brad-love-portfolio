
import React from "react";
import Document, {
    Head,
    Html,
    Main,
    NextScript
} from "next/document";

class MyDocument extends Document{

    render(): React.ReactElement{
        return (
            <Html lang="en">
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link as="font" crossOrigin="anonymous" href="/fonts/JetBrainsMono-Regular.ttf" rel="preload" type="font/ttf" />
                    <link as="font" crossOrigin="anonymous" href="/fonts/JetBrainsMono-Bold.ttf" rel="preload" type="font/ttf" />
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
