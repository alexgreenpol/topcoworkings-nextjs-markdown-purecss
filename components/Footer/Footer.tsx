import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <Link href="/">
                                <Image
                                    src="/images/dino.svg"
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </Link>
                            <p>2023 © topcoworking.com.ua</p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Міста</h5>
                            <nav className="menu">
                                <Link href="/lviv">Львів</Link>
                                <Link href="/kyiv">Київ</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="footer__widget">
                            <h5>Інформація</h5>
                            <nav className="menu">
                                <Link href="/gdpr">
                                    Політика конфіденційності
                                </Link>
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
