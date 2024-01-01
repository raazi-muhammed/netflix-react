type Props = { children: any };

const Container = ({ children }: Props) => {
    return (
        <div style={{ width: "min(100%, 70rem)" }} className="mx-auto">
            {children}
        </div>
    );
};

export default Container;
