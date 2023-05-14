import Title from "./title";
import SubTitle from "./sub-title";
import Discription from "./discription";

import { coursework } from '../../../utils/data';

const Certifications = () => {
    return (
        <div>
            <Title title="Coursework" />
            {coursework.map((course, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={course.title} tag={""} linesplit={false} bottomMargin />
                        {
                            course.discription.map((description, index) => {
                                return (
                                    <Discription description={description} key={index} />
                                )
                            })
                        }
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Certifications;