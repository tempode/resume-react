import Name from "./indi-components/name";
import Title from "./indi-components/title";
import Links from "./indi-components/links";
import HomeIcon from "../assets/icons/home.png";

const Header = () => {

    const flex = {
        display: "flex",
        gap: "10px",
    }

    return (
        <header>
            <Name name="Sachin Kumar" />

            <div style={flex}>
                <Title title="Software Engineer" />

                <div className="link">
                    <img src={HomeIcon} alt="home_icon.png" />
                    <p>Jammu & Kashmir, Jammu, 180001</p>
                </div>
            </div>

            <Links />
        </header>
    );
}

export default Header;