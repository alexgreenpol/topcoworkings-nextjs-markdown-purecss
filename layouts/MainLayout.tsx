import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type MainLayoutProps = {
    children: JSX.Element | JSX.Element[];
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <main className="wrapper">{children}</main>
            <Footer />
        </>
    );
}
