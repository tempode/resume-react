import Skills from './indi-components/main/skills';
import Intrests from './indi-components/main/intrests';
import Certifications from './indi-components/main/certifications';

const Right = () => {
    return (
        <div className="right-section">
            <Skills />
            <Certifications />
            <Intrests />
        </div>
    )
}

export default Right;