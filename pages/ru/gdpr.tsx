import Head from "next/head";

export default function Gdpr() {
    return (
        <>
            <Head>
                <title>Политика конфиденциальности | topcoworking.com.ua</title>
                <meta
                    name="title"
                    content="Политика конфиденциальности | topcoworking.com.ua"
                />
                <meta
                    property="og:title"
                    content="Политика конфиденциальности | topcoworking.com.ua"
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:url"
                    content="https://topcoworking.com.ua/"
                />
                <meta property="og:site_name" content="topcoworking.com.ua" />
            </Head>
            <section className="page">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h1>Политика конфиденциальности</h1>
                            <p>
                                Мы собираем всю информацию о вашем коворкинге,
                                которую вы предоставляете и отображаем ее на
                                нашем веб-сайте. Мы можем использовать различные
                                средства для измерения отклика страницы, времени
                                просмотра страницы, информацию о взаимодействии
                                со страницей.
                            </p>
                            <p>
                                Мы собираем информацию для того, чтобы
                                предоставить нашим пользователям подробную
                                информацию о вашем коворкинге а также рассказать
                                им о том, как можно воспользоваться вашими
                                услугами.
                            </p>

                            <p>
                                Если вы не хотите, чтобы мы отображали
                                информацию о вашем коворкинге на нашем сайте, вы
                                можете написать нам на почту
                                info@topcoworking.com.ua
                            </p>
                            <p>
                                Мы можем изменить эту политику
                                конфиденциальности, если потребуется, поэтому
                                просматривайте ее регулярно. Если будут внесены
                                существенные изменения, мы сообщим вам, что она
                                была обновлена на главной странице сайта.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
