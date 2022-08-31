import Skills from './indi-components/main/skills';
import Coursework from './indi-components/main/coursework';
import Education from "./indi-components/main/education";

const Right = () => {
    return (
        <div className="right-section">
            <Skills />
            <Education />
            <Coursework />
        </div>
    )
}

export default Right;