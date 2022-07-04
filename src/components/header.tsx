import Name from "./indi-components/name";
import Title from "./indi-components/title";
import Links from "./indi-components/links";

const Header = () => {
    return (
        <header>
            <Name name="Sachin Kumar" />
            <Title title="Software Enginear" />
            <Links />
        </header>
    );
}

export default Header;