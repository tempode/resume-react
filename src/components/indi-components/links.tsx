import { linkData } from '../../utils/linkdata';

const Links = () => {
    return (
        <div className='links-container'>
            {linkData.map((link, index) => {
                return (
                    <div key={index} className="link">
                        <img src={link.url} alt={link.name} />
                        <a href={link.link} target="_blank">
                            <p>{link.value}</p>
                        </a>
                    </div>
                );
            })}
        </div>
    )
}

export default Links;