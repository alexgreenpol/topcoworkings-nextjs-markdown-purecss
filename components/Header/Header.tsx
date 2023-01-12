import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="pure-g align-center">
                    <div className="pure-u-1 pure-u-md-1-4">
                        <div className="logo">
                            <Link href="/">topcoworking.com.ua</Link>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-3-4">
                        <nav className="menu">
                            <Link href="/">Головна</Link>
                            <Link href="/about">Про нас</Link>
                            <Link href="/lviv">Львів</Link>
                            <Link href="/kyiv">Київ</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
