import spinner from "../../public/images/spinner.svg";

export default function Loader() {
    return (
        <section className="page">
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="loader">
                            <img src={spinner.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
