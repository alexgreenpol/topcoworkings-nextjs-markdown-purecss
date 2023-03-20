import Head from "next/head";
import Heading from "../../components/Heading/Heading";

export default function About() {
    return (
        <>
            <Head>
                <title>Про нас | topcoworking.com.ua | Ukraine</title>
                <meta
                    name="title"
                    content="Про нас | topcoworking.com.ua | Ukraine"
                />
                <meta
                    name="description"
                    content="Ми шукаємо найкращі коворкінги України та розміщуємо їх на нашому сайті для того, щоб люди могли швидко знайти коворкінг в оренду у своєму місті."
                />
                <meta
                    property="og:title"
                    content="Про нас | topcoworking.com.ua | Ukraine"
                />
                <meta
                    property="og:description"
                    content="Ми шукаємо найкращі коворкінги України та розміщуємо їх на нашому сайті для того, щоб люди могли швидко знайти коворкінг в оренду у своєму місті."
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:url"
                    content="https://topcoworking.com.ua/"
                />
                <meta property="og:site_name" content="topcoworking.com.ua" />
            </Head>
            <section className="page">
                <Heading>
                    <h1>
                        Topcoworking - проект, що дозволяє подивитися всі
                        найкращі коворкінги України та швидко орендувати
                        коворкінг у своєму місті
                    </h1>
                </Heading>
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h2>Про нас</h2>
                            <p>
                                Ми зараз живемо у непростий час, і ми вирішили
                                зробити цікавий проект, який може бути корисним
                                для всіх користувачів інтернету хто цікавиться
                                пошуком місця для стабільної роботи у своєму
                                місті.
                            </p>
                            <p>
                                Ми свого часу також шукали гарний коворкінг, і
                                це виявилося великою проблемою, тому що багато
                                сайтів були просто перевантажені різною
                                інформацією та рекламою. Також найчастіше на цих
                                сайтах були неактуальні дані, деякі коворкінги
                                були зачинені чи не працювали.
                            </p>
                            <p>
                                Перевага нашого сайту в тому, що ви можете не
                                відволікаючись переглянути всі актуальні{" "}
                                <strong>коворкінги України</strong> та вибрати
                                варіант, що найбільш сподобався. Ми регулярно
                                перевіряємо інформацію про коворкінги, цінової
                                політики, уточнюємо актуальні питання, такі як -
                                наявність генераторів або бомбосховища поряд.
                            </p>
                            <p>Загалом ласкаво просимо і вдалого пошуку!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
