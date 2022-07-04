import Title from "./title";
import SubTitle from './sub-title'
import Sstitle from "./sstitle";

import { educationData } from '../../../utils/educationData';

const Education = () => {
    return (
        <div>
            <Title title="Education" />
            {educationData.map((item, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={item.degree} tag={item.institute} />
                        <Sstitle title={item.year} />
                    </div>
                )
            })}
        </div>
    )
}

export default Education;