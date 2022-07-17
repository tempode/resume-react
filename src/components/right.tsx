import Skills from './indi-components/main/skills';
import Coursework from './indi-components/main/coursework';
import Education from "./indi-components/main/education";

const Right = () => {
    return (
        <div className="right-section">
            <Education />
            <Skills />
            <Coursework />
        </div>
    )
}

export default Right;