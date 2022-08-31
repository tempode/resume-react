import Projects from "./indi-components/main/projects";
import Exprience from "./indi-components/main/Expirence";
import Internship from "./indi-components/main/internship";
import Cocirriculars from "./indi-components/main/cocurriculars";

const Left = () => {
    return (
        <div className="left-section">
            <Internship />
            <Exprience />
            <Projects />
            <Cocirriculars />
        </div>
    )
}

export default Left;