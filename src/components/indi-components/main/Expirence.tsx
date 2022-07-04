import Title from "./title";
import SubTitle from "./sub-title";
import Sstitle from "./sstitle";
import Description from "./discription";

import { exprience } from '../../../utils/data';

const Exprience = () => {
    return (
        <div>
            <Title title="Experience" />
            {exprience.map((exprience, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={exprience.title} tag={exprience.company} />
                        <Sstitle title={exprience.date} />
                        {exprience.discription.map((description, index) => {
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

export default Exprience;