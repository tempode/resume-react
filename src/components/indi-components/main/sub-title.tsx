interface SubTitleProps {
    title: string;
    tag: string;
    linesplit: boolean;
    bottomMargin: boolean;
}

const SubTitle = ({ title, tag, linesplit, bottomMargin }: SubTitleProps) => {
    return (
        <p className="main-sub-title" id={bottomMargin ? "main-sub-title-bottom-margin" : ""}>
            {title}
            {linesplit && <br />}
            {tag && <span className="tag">{tag}</span>}
        </p>
    )
}

export default SubTitle;