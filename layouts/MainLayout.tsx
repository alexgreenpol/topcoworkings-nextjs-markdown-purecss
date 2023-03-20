import RuFooter from "../components/Footer/RuFooter";
import UaFooter from "../components/Footer/UaFooter";
import RuHeader from "../components/Header/RuHeader";
import UaHeader from "../components/Header/UaHeader";

type MainLayoutProps = {
    children: JSX.Element | JSX.Element[];
    className: string;
    currentLanguage: string | null;
};

export default function MainLayout({
    children,
    className,
    currentLanguage,
}: MainLayoutProps) {
    return (
        <>
            {currentLanguage === "ru" ? (
                <RuHeader className={className} />
            ) : (
                <UaHeader className={className} />
            )}
            <main className={`wrapper ${className}`}>{children}</main>
            {currentLanguage === "ru" ? (
                <RuFooter className={className} />
            ) : (
                <UaFooter className={className} />
            )}
        </>
    );
}
