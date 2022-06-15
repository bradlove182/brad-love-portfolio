
import React, {
    useCallback,
    useState
} from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.scss";
import "../styles/fonts.scss";

import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { SiteTitle } from "../components/site-title";
import { ThemeProvider } from "../components/theme";
// Import { BlobRender } from "../components/blob";

import type { ThemeKey } from "../themes";
import type { AppProps } from "next/app";

const BlobRender = dynamic(() => import("../components/blob"), {
    ssr: false
});

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => {

    const [theme, setTheme] = useState<ThemeKey>("yellow");

    const handleThemeChange = useCallback((key: ThemeKey) => {
        setTheme(key);
    }, []);

    return (
        <ThemeProvider theme={ theme }>
            <Head>
                <title>
                    { "Bradley Love" }
                </title>
                <meta content="Bradley Love" name="description" />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <BlobRender />
            <SiteTitle />
            <Navigation onThemeChange={ handleThemeChange } theme={ theme } />
            <Component { ...pageProps } />
            <Footer />
        </ThemeProvider>
    );

};

export default MyApp;
