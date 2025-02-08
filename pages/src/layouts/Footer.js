const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" onClick={() => scrollTop()} className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Copyright ©melytop {new Date().getFullYear()}. Tous droits réservés. <br />
            Powered by{" "}
            <a
              className="fn__link"
              href="https://pledgeandgrow.com/"
              target="_blank"
              rel="noreferrer"
            >
              pledgeandgrow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
