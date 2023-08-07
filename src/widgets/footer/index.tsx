import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-block">
        <p className="footer__text footer__copyright">© 2023</p>
        <div className="footer__social">
          <span className="footer__text">Developed by </span>
          <a
            className="footer__text footer__link"
            href="https://github.com/arknal/mesto-fsd"
            rel="noreferrer"
            target="_blank"
          >
            Andrey Mikulin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
