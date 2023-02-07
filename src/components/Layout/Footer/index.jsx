import { GithubIcon } from "../../svg/iconGithub/github";
import { InstagramIcon } from '../../svg/iconInstagram/instragram';

function Footer() {
    return (
        <div className="container-global-footer">
           <div className="container-social-footer">
              <a href="https://www.instagram.com/miguelsperlee/" target='_blank'><InstagramIcon/></a>
              <a href="https://github.com/MiguelSperle" target='_blank'><GithubIcon/></a>
           </div>
           <p className="rights">2023 © all Rights Reserved</p>
           <p className="author"><span>Made by </span> <a  href="https://github.com/MiguelSperle" target='_blank'>Miguel</a> </p>
        </div>
    )
}
export default Footer;