import Education from "./indi-components/main/education";
import Projects from "./indi-components/main/projects";
import Exprience from "./indi-components/main/Expirence";
import Cocirriculars from "./indi-components/main/cocurriculars";

const Left = () => {
    return (
        <div className="left-section">
            <Education />
            <Exprience />
            <Projects />
            <Cocirriculars />
        </div>
    )
}

export default Left;