import Title from "./title";
import Discription from "./discription";

import { certifications } from '../../../utils/data';

const Certifications = () => {
    return (
        <div>
            <Title title="Certifications" />
            {certifications.map((certification, index) => {
                return (
                    <div key={index}>
                        <Discription description={certification} />
                    </div>
                )
            })}
        </div>
    )
}

export default Certifications;