interface SubTitleProps {
    title: string;
    tag: string;
}

const SubTitle = ({ title, tag }: SubTitleProps) => {
    return (
        <p className="main-sub-title">
            {title}
            {tag && <span className="tag">{tag}</span>}
        </p>
    )
}

export default SubTitle;