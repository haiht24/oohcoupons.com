import '@/assets/css/footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-value-box">
                <div style={{ height: 10 }} />
                <div className="footer-value-left">
                    <div className="footer-value-left-moolah">
                        <a href="/" style={{ display: "inline-block" }}>
                            <img src="https://www.joinmoolah.com/www/images/moolah.png" />
                        </a>
                    </div>
                    <div className="footer-value-left-Save">
                        <a href="#">
                            <span>Save with just 1 click!</span>
                        </a>
                    </div>
                    <div className="footer-about">
                        <a href="/terms-conditions">Terms &amp; Conditions</a>
                        <a href="/terms-conditions">Privacy Policy</a>
                        <a href="https://joinmoolah.goaffpro.com/" target="_blank">
                            Affiliate Program
                        </a>
                    </div>
                    <div className="footer-banquan">
                        <i>JoinMoolah © 2022</i>
                    </div>
                </div>
                <div className="split-left-right" />
                <div className="footer-value-center">
                    <div className="footer-value-center-text">
                        <span>Install Moolah now, and start to save today!</span>
                    </div>
                    <div className="footer-value-right-pic">
                        <div className="footer-value-right-pic-googleBig">
                            <img src="https://www.joinmoolah.com/www/images/googleBig2.png" />
                        </div>
                    </div>
                </div>
                <div className="footer-value-right">
                    <div className="footer-value-right-button">
                        <a
                            href="https://chrome.google.com/webstore/detail/moolah-automatic-coupon-h/gdnhngmilhhebigaokmniikdlcjbcbhg"
                            target="_blank"
                        >
                            <div className="footer-value-right-button-AMTC">
                                <span>Add Moolah to Chrome</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-value-text">
                        <span>
                            Disclosure: We may earn a commission when you use one of our
                            conpons/links to make a purchase.
                        </span>
                    </div>
                    <div className="footer-value-left-fuwu">
                        <a href="/about-us" target="_blank">
                            About Us
                        </a>
                        <span>|</span>
                        <a href="https://joinmoolah.goaffpro.com/" target="_blank">
                            Affiliate Program
                        </a>
                        <span>|</span>
                        <a href="/contact-us" target="_blank">
                            Contact Us
                        </a>
                        <span>|</span>
                        <a href="/privacy-policy" target="_blank">
                            Privacy Policy
                        </a>
                        <span>|</span>
                        <a href="/terms-conditions" target="_blank">
                            Terms &amp; Conditions
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer