import Image from "next/image";
import Link from "next/link";
import getCurrentYear from "../../helpers/getCurrentYear";

type RuFooterProps = {
    className: string;
};

export default function RuFooter({ className }: RuFooterProps) {
    return (
        <footer className={`footer ${className}`}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <Link
                                aria-label="Перейти на главную страницу"
                                href="/"
                            >
                                <Image
                                    src="/images/dino.svg"
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </Link>
                            <p>{getCurrentYear()} © topcoworking.com.ua</p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Города</h5>
                            <nav className="menu">
                                <Link
                                    aria-label="Перейти на страницу - Львов"
                                    href="/ru/lviv"
                                >
                                    Львов
                                </Link>
                                <Link
                                    aria-label="Перейти на страницу - Киев"
                                    href="/ru/kyiv"
                                >
                                    Киев
                                </Link>
                                <Link
                                    aria-label="Перейти на страницу - Одесса"
                                    href="/ru/odesa"
                                >
                                    Одесса
                                </Link>
                                <Link
                                    aria-label="Перейти на страницу - Харьков"
                                    href="/ru/kharkiv"
                                >
                                    Харьков
                                </Link>
                                <Link
                                    aria-label="Перейти на страницу - Днепр"
                                    href="/ru/dnipro"
                                >
                                    Днепр
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Информация</h5>
                            <nav className="menu">
                                <Link
                                    aria-label="Перейти на страницу - Политика конфиденциальности"
                                    href="/ru/gdpr"
                                >
                                    Политика конфиденциальности
                                </Link>
                                <a
                                    aria-label="Перейти на страницу - Карта сайта"
                                    href="/sitemap-0.xml"
                                    target="_blank"
                                >
                                    Карта сайта
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Размещение</h5>
                            <p>
                                Для сотрудничества и размещения вашего
                                коворкинга на сайте пишити на
                                info@topcoworking.com.ua
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
