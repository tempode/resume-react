import { linkData } from '../../utils/linkdata';

const Links = () => {
    return (
        <div className='links-container'>
            {linkData.map((link, index) => {
                return (
                    <div key={index} className="link">
                        <img src={link.url} alt={link.name} />
                        <p>{link.value}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Links;