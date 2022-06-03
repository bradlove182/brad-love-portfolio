
import React, {
    useCallback,
    useState
} from "react";
import Head from "next/head";

import "../styles/globals.scss";

import { BlobRender } from "../components/blob";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { ThemeProvider } from "../components/theme";
import { ThemePicker } from "../components/theme-picker";
import { Loading } from "../components/loading";

import type { ThemeKey } from "../themes";
import type { AppProps } from "next/app";

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => {

    const [theme, setTheme] = useState<ThemeKey>("yellow");
    const [loading, setLoading] = useState<boolean>(false);

    const handleThemeChange = useCallback((key: ThemeKey) => {
        setTheme(key);
    }, []);

    const handleLoading = useCallback((state: boolean) => {

        setLoading(state);

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
            <Loading loaded={ loading }>
                <BlobRender blobLoaded={ handleLoading } />
                <Navigation />
                <Component { ...pageProps } />
                <Footer />
                <ThemePicker
                    currentTheme={ theme } onThemeChange={ handleThemeChange }
                />
            </Loading>
        </ThemeProvider>
    );

};

export default MyApp;
