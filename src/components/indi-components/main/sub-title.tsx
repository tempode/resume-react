interface SubTitleProps {
    title: string;
    tag: string;
    linesplit: boolean;
}

const SubTitle = ({ title, tag, linesplit }: SubTitleProps) => {
    return (
        <p className="main-sub-title">
            {title}
            {linesplit && <br />}
            {tag && <span className="tag">{tag}</span>}
        </p>
    )
}

export default SubTitle;