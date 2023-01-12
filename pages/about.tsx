import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>Про нас | Topcoworking.com.ua</title>
                <meta name="title" content="Про нас | Topcoworking.com.ua" />
                <meta
                    name="description"
                    content="Коротка інформація про нас, про те чим ми займаємось і для чого ми все це робимо."
                />
                <meta
                    property="og:title"
                    content="Про нас | Topcoworking.com.ua"
                />
                <meta property="og:site_name" content="Topcoworkings.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworkings.com.ua/"
                />
                <meta
                    property="og:description"
                    content="Коротка інформація про нас, про те чим ми займаємось і для чого ми все це робимо."
                />
                <meta property="og:type" content="article" />
            </Head>
            <section className="page">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h1>
                                Topcoworking - проект який дозволяє подивитись
                                всі коворкінги України в одному місці
                            </h1>
                            <p>
                                Ми зараз живемо в непростий час, і ми вирішили
                                зробити цікавий проект який може бути цікавим
                                для усіх користувачів інтернета, які цікавляться
                                цією темою і в пошуку місця для стабільної
                                роботи в своєму місті. Проект повністю
                                безоплатний, якщо ви маєте свій коворкінг - ви
                                можете размістити його на нашому ресурсі, для
                                цьго напишіть нам на контактний мейл.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
