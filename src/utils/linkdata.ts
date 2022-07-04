import MailIcon from '../assets/icons/mail.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';

interface LinkData {
    name: string;
    value: string;
    url: string;
}

export const linkData: LinkData[] = [
    {
        name: "mail",
        value: "udhaybegyall@gmail.com",
        url: MailIcon
    },
    {
        name: "phone",
        value: "+91 914-941-5460",
        url: PhoneIcon
    },
    {
        name: "linkedin",
        value: "linkedin.com/in/udhaybegyall",
        url: LinkedinIcon
    },
    {
        name: "github",
        value: "github.com/udhaybegyall",
        url: GithubIcon
    }
];