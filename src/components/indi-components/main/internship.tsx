import Title from "./title";
import SubTitle from "./sub-title";
import Sstitle from "./sstitle";
import Description from "./discription";

import { internship } from '../../../utils/data';

const Internship = () => {
    return (
        <div>
            <Title title="Internship" />
            {internship.map((internship, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={internship.title} tag={internship.company} linesplit={false} />
                        <Sstitle title={internship.date} />
                        {internship.discription.map((description, index) => {
                            return (
                                <div key={index}>
                                    <ul>
                                        <Description description={description} showbullet lineheight />
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Internship;