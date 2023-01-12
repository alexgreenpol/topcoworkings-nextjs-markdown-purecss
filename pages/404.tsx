import Link from "next/link";

export default function NotFoundPage() {
    return (
        <section className="page">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <h1>
                            Нажаль ви помилились сторінкою. Цієї сторінки не
                            існує.
                        </h1>
                        <p>
                            Спробуйте іншу адресу або перейдіть
                            <Link href="/">на головну</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
