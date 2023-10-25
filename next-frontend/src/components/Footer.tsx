import Image from 'next/image'
import srcFooter from '@/assets/images/oo/Footer/homefooter.png'
import Logo from '@/assets/images/moolah.webp'
import { ButtonPrimary } from './Buttons'
import '@/assets/css/footer.scss'
const Footer = ({ext}:any) => {
    return (
        <div className="footer">
            <div className="footer-value-box">
                <div style={{ height: 10 }} />
                <div className="footer-value-left">
                    <div className="footer-value-left-moolah">
                        <a href="#" style={{ display: "inline-block" }}>
                            <Image src={Logo} alt={`Logo`}/>
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
                    </div>
                    <div className="footer-banquan">
                        <i>JoinMoolah © 2022</i>
                    </div>
                </div>
                <div className="split-left-right" />
                <div className="footer-value-center">
                    <div className="footer-value-center-text">
                        <span>Install oOhcoupons and start saving today!</span>
                    </div>
                    <div className="footer-value-right-pic">
                        <div className="footer-value-right-pic-googleBig">
                            <Image src={srcFooter} alt='srcFooter'/>
                        </div>
                    </div>
                </div>
                <div className="footer-value-right">
                        <ButtonPrimary text={false} cl={'footer-value-right-button'}/>
                </div>
                <div className="footer-box">
                    <div className="footer-value-text">
                        <span>
                        Disclosure: oOhcoupons employs affiliate programs to generate revenue, enabling us to earn a commission when you purchase a product through our links.
                        </span>
                    </div>
                    <div className="footer-value-left-fuwu">
                        <a href="/about-us" target="_blank">
                            About Us
                        </a>
                        <span>|</span>
                        <a href="mailto:contact@oohcoupons.com" target="_blank">
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