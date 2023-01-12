import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Topcoworking - огляд всіх коворкінгів твого міста | всі
                    коворкінги України
                </title>
                <meta
                    name="title"
                    content="Topcoworking - огляд всіх коворкінгів твого міста"
                />
                <meta
                    name="description"
                    content="Оглядовий майданчик всіх коворкінгів України. Знайди краще місце для спокійної і якісної роботи в профессійній атмосфері."
                />
                <meta
                    property="og:title"
                    content="Topcoworking - огляд всіх коворкінгів твого міста"
                />
                <meta property="og:site_name" content="Topcoworkings.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworkings.com.ua/"
                />
                <meta
                    property="og:description"
                    content="Оглядовий майданчик всіх коворкінгів України. Знайди краще місце для спокійної і якісної роботи в профессійній атмосфері."
                />
                <meta property="og:type" content="article" />
            </Head>
            <section className="page">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h1>Головна</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
