import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type UaHeaderProps = {
    className: string;
};

export default function UaHeader({ className }: UaHeaderProps) {
    const router = useRouter();
    const ruPath = router.asPath.replace("ua", "ru");

    const [openned, setOpenned] = useState(false);

    useEffect(() => {
        setOpenned(false);
    }, [router.asPath]);

    return (
        <header className={`header ${className}`}>
            <div className="container">
                <div className="pure-g align-center">
                    <div className="pure-u-1-4">
                        <div className="logo">
                            <Link
                                aria-label="Перейти на головну сторінку"
                                href="/ua"
                            >
                                <span className="logo__text">
                                    topcoworking.com.ua
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="pure-u-3-4">
                        <div className="header__menus">
                            <nav
                                className={`menu ${openned ? "openned" : null}`}
                                itemScope
                                itemType="https://schema.org/SiteNavigationElement"
                            >
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Головна"
                                    href="/ua"
                                >
                                    Головна
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Про нас"
                                    href="/ua/about"
                                >
                                    Про нас
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Львів"
                                    href="/ua/lviv"
                                >
                                    Львів
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Київ"
                                    href="/ua/kyiv"
                                >
                                    Київ
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Одеса"
                                    href="/ua/odesa"
                                >
                                    Одеса
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Харків"
                                    href="/ua/kharkiv"
                                >
                                    Харків
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на сторінку - Дніпро"
                                    href="/ua/dnipro"
                                >
                                    Дніпро
                                </Link>
                            </nav>
                            <button
                                className={`burger ${
                                    openned ? "openned" : null
                                }`}
                                onClick={() => {
                                    setOpenned(!openned);
                                }}
                                aria-label="Активувати чи деактивувати мобільне меню"
                            >
                                <span className="burger__line"></span>
                            </button>
                            <div className="language">
                                <span className="active">Ua</span>
                                <Link
                                    aria-label="Перейти на російську версію сайту"
                                    href={ruPath}
                                >
                                    Ru
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
