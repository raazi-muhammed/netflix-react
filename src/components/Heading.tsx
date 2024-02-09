type Props = { children: string };

const Heading = ({ children }: Props) => {
    return (
        <p className="font-semibold text-2xl text-white opacity-100 z-40 ps-4 pt-4 ">
            {children}
        </p>
    );
};

export default Heading;
