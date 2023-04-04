import Name from "./indi-components/name";
import Title from "./indi-components/title";
import Links from "./indi-components/links";

const Header = () => {
    return (
        <header>
            <Name name="Sachin Kumar" />
            <Title title="Full-Stack Software Engineer"/>
            <Links />
        </header>
    );
}

export default Header;