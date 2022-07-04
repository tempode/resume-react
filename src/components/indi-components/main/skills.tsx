import Title from "./title";
import SubTitle from "./sub-title";
import Description from "./discription";

import { split } from "../../../utils/split";
import { skillsData } from "../../../utils/skillsData";

const Skills = () => {
    return (
        <div>
            <Title title="Skills" />
            {skillsData.map((skill, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={skill.title} tag={""} />

                        {
                            split(skill.skills).map((skill: string, index: number) => {
                                return (
                                    <Description description={skill} key={index} />
                                )
                            })
                        }

                    </div>
                )
            })}
        </div>
    )
}

export default Skills;