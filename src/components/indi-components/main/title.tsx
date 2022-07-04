interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <h3 className="main-title">{title}</h3>
    );
}

export default Title;