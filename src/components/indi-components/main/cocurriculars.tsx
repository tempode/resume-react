import Title from "./title";
import SubTitle from "./sub-title";
import Description from "./discription";

import { coCurriculars } from "../../../utils/coCurriculars";

const cocirriculars = () => {
    return (
        <div>
            <Title title="Co-curriculars" />
            {coCurriculars.map((coCurricular, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={coCurricular.title} tag="" />
                        {
                            coCurricular.description.map((description, index) => {
                                return (
                                    <ul key={index}>
                                        <Description description={description} showbullet lineheight />
                                    </ul>
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

export default cocirriculars;