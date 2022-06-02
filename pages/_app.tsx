
import React, {
    useCallback,
    useState
} from "react";
import Head from "next/head";

import "../styles/globals.scss";

import BlobRender from "../components/blob";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { ThemeProvider } from "../components/theme";
import { ThemePicker } from "../components/theme-picker";

import type { ThemeKey } from "../themes";
import type { AppProps } from "next/app";

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => {

    const [theme, setTheme] = useState<ThemeKey>("green");

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
            <Navigation />
            <Component { ...pageProps } />
            <Footer />
            <ThemePicker
                currentTheme={ theme } onThemeChange={ handleThemeChange }
            />
        </ThemeProvider>
    );

};

export default MyApp;
