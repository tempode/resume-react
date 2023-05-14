import Skills from './indi-components/main/skills';
import Coursework from './indi-components/main/coursework';
import Education from "./indi-components/main/education";
import Projects from './indi-components/main/projects';

const Right = () => {
    return (
        <div className="right-section">
            <Skills />
            <Projects />
            <Education />
            {/* <Coursework /> */}
        </div>
    )
}

export default Right;