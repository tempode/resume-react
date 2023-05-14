interface DescriptionProps {
    description: string;
    showbullet?: boolean;
    lineheight?: boolean;
}

const Description = ({ description, showbullet, lineheight }: DescriptionProps) => {

    return (
        showbullet ?
            <li className="main-description" id={lineheight ? "main-description-lineheight" : ""}>
                {description}
            </li>
            :
            <p className="main-description-if-p">{description}</p>
    )
}

export default Description;