import { useState, useEffect } from "react";
import { Roboto } from "@next/font/google";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });
import Router, { useRouter } from "next/router";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader/Loader";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import generateCrumbs from "../helpers/generateCrumbs";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);

    useEffect(() => {
        Router.events.on("routeChangeStart", () => setLoading(true));
        Router.events.on("routeChangeComplete", () => setLoading(false));
        Router.events.on("routeChangeError", () => setLoading(false));

        const currentPath = router.asPath;

        if (currentPath === "/") {
            navigator.language === "ru-RU"
                ? router.push("/ru")
                : router.push("/ua");
        }

        const pathLanguage = currentPath.startsWith("/ru") ? "ru" : "ua";

        if (currentLanguage !== pathLanguage) {
            setCurrentLanguage(pathLanguage);
            document.documentElement.lang = pathLanguage;
        }

        return () => {
            Router.events.off("routeChangeStart", () => setLoading(true));
            Router.events.off("routeChangeComplete", () => setLoading(false));
            Router.events.off("routeChangeError", () => setLoading(false));
        };
    }, [Router.events, router.asPath]);

    return (
        <>
            {router.asPath === "/" && (
                <Head>
                    <meta name="robots" content="noindex, nofollow" />
                </Head>
            )}
            <MainLayout
                className={roboto.className}
                currentLanguage={currentLanguage}
            >
                {router.asPath !== "/" ? (
                    <Breadcrumbs crumbs={generateCrumbs()} />
                ) : (
                    <></>
                )}

                {loading ? <Loader /> : <Component {...pageProps} />}
            </MainLayout>
        </>
    );
}
