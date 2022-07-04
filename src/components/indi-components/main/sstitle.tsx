interface SubTitleProps {
    title: string;
}

const SubTitle = ({ title }: SubTitleProps) => {
    return (
        <p className="main-ss-title">{title}</p>
    )
}

export default SubTitle;