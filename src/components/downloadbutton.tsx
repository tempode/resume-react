import DownlaodIcon from '../assets/icons/downlaod.svg';

const DownloadButton = () => {
    return (
        <a title="Download CV" className="download-button" href="src/assets/resume.pdf" download>
            <img src={DownlaodIcon} alt="Download Resume" />
        </a>
    );
}

export default DownloadButton;