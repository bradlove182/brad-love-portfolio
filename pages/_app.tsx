
import React, {
    Suspense,
    useCallback,
    useState
} from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.scss";

import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { ThemeProvider } from "../components/theme";
import { ThemePicker } from "../components/theme-picker";

import type { ThemeKey } from "../themes";
import type { AppProps } from "next/app";

const BlobRender = dynamic(() => import("../components/blob"));

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
            <Suspense>
                <BlobRender />
            </Suspense>
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
