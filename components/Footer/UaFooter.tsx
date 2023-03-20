import Image from "next/image";
import Link from "next/link";
import getCurrentYear from "../../helpers/getCurrentYear";

type UaFooterProps = {
    className: string;
};

export default function UaFooter({ className }: UaFooterProps) {
    return (
        <footer className={`footer ${className}`}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <Link
                                aria-label="Перейти на головну сторінку"
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
                            <h5>Міста</h5>
                            <nav className="menu">
                                <Link
                                    aria-label="Перейти на сторінку - Львів"
                                    href="/ua/lviv"
                                >
                                    Львів
                                </Link>
                                <Link
                                    aria-label="Перейти на сторінку - Київ"
                                    href="/ua/kyiv"
                                >
                                    Київ
                                </Link>
                                <Link
                                    aria-label="Перейти на сторінку - Одеса"
                                    href="/ua/odesa"
                                >
                                    Одеса
                                </Link>
                                <Link
                                    aria-label="Перейти на сторінку - Харків"
                                    href="/ua/kharkiv"
                                >
                                    Харків
                                </Link>
                                <Link
                                    aria-label="Перейти на сторінку - Дніпро"
                                    href="/ua/dnipro"
                                >
                                    Дніпро
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Інформація</h5>
                            <nav className="menu">
                                <Link
                                    aria-label="Перейти на сторінку - Політика конфіденційності"
                                    href="/ua/gdpr"
                                >
                                    Політика конфіденційності
                                </Link>
                                <a
                                    aria-label="Перейти на сторінку - Мапа сайту"
                                    href="/sitemap-0.xml"
                                    target="_blank"
                                >
                                    Мапа сайту
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Розміщення</h5>
                            <p>
                                Для співпраці та розміщення вашого коворкінгу на
                                сайті пишіть на info@topcoworking.com.ua
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
