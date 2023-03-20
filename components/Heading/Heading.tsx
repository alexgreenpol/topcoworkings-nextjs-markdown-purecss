type HeadingProps = {
    children: JSX.Element | JSX.Element[];
    customBgImage?: string;
};

export default function Heading({ children, customBgImage }: HeadingProps) {
    return (
        <>
            <div
                className="heading"
                style={
                    customBgImage
                        ? {
                              backgroundImage: `url(${customBgImage})`,
                          }
                        : undefined
                }
            >
                {children}
            </div>
        </>
    );
}
