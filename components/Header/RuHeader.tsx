import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type RuHeaderProps = {
    className: string;
};

export default function RuHeader({ className }: RuHeaderProps) {
    const router = useRouter();
    const uaPath = router.asPath.replace("ru", "ua");

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
                                aria-label="Перейти на главную страницу"
                                href="/ru"
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
                                    aria-label="Перейти на страницу - Главная"
                                    href="/ru"
                                >
                                    Главная
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - О нас"
                                    href="/ru/about"
                                >
                                    О нас
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - Львов"
                                    href="/ru/lviv"
                                >
                                    Львов
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - Киев"
                                    href="/ru/kyiv"
                                >
                                    Киев
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - Одесса"
                                    href="/ru/odesa"
                                >
                                    Одесса
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - Харьков"
                                    href="/ru/kharkiv"
                                >
                                    Харьков
                                </Link>
                                <Link
                                    itemProp="url"
                                    aria-label="Перейти на страницу - Днепр"
                                    href="/ru/dnipro"
                                >
                                    Днепр
                                </Link>
                            </nav>
                            <button
                                className={`burger ${
                                    openned ? "openned" : null
                                }`}
                                onClick={() => {
                                    setOpenned(!openned);
                                }}
                                aria-label="Активировать или деактивировать мобильное меню"
                            >
                                <span className="burger__line"></span>
                            </button>
                            <div className="language">
                                <Link
                                    aria-label="Перейти на украинскую версию сайта"
                                    href={uaPath}
                                >
                                    Ua
                                </Link>
                                <span className="active">Ru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
