import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const Donguk = 'https://github.com/foodeco';
  const Haeun = 'https://github.com/hahahaday12';
  const Saeyeon = 'https://github.com/saeyeonKim';
  const Daehyun = 'https://github.com/dhmoon11';
  const Jinyoung = 'https://github.com/jinyoungpark231';
  const Twinkle = 'https://github.com/KDT5TeamWink';

  const memberInfo = {
    Donguk:'서동욱',
    Haeun:'하은',
    Saeyeon:'세연',
    Daehyun:'대연',
    Jinyoung:'진영'
  }

  return (
    <footer>
      <div className="footerContainer">
        <div className="Logo-box">
          <img src="/images/Wink_logo.avif" alt="logo_image" />
        </div>
        <p className="title">ToyProject ©️ 5기 7조 Twinkle</p>
        <div className="Footer-inner">
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              onClick={() => {
                window.open(Twinkle);
              }}
            />
            <p>Twinkle</p>
          </div>
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              onClick={() => {
                window.open(Donguk);
              }}
            />
            <p>{memberInfo.Donguk}</p>
          </div>
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              onClick={() => {
                window.open(Haeun);
              }}
            />
            <p>{memberInfo.Haeun}</p>
          </div>
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              onClick={() => {
                window.open(Saeyeon);
              }}
            />
            <p>{memberInfo.Saeyeon}</p>
          </div>
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              onClick={() => {
                window.open(Daehyun);
              }}
            />
            <p>{memberInfo.Daehyun}</p>
          </div>
          <div className="wrap">
            <FontAwesomeIcon
              icon={faGithub}
              className="BsGithub"
              size="2x"
              onClick={() => {
                window.open(Jinyoung);
              }}
            />
            <p>{memberInfo.Jinyoung}</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
  

};
export default Footer;
