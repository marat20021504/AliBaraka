import styled from "styled-components";
import Group from "../assets/Group 35575.png"
import FooterIcon from "../assets/footer-icon.svg"
import media from "../assets/media.svg"
import coding from "../assets/coding.svg"
import { Link } from "react-router-dom";

const Footer = () => {

    const links = [
        {bold: "About us", par1: "About us", par2: "Our team", par3: "Frequent Questions", par4: "Contact us"},
        {bold: "Products", par1: "Plyonka", par2: "Zajim", par3: "Isitish x Sovutish", par4: "Suv taqsimoti"},
        {bold: "Blog", par1: "10X", par2: "Gardening", par3: "Melon", par4: "Water dist"}
    ]

    return (
        <Wrapper>

            <div className="Footer">

                <div className="Links">
                    <Link to={"/"}>
                        <img src={FooterIcon} alt="FooterIcon" />
                    </Link>

                    <div className="titles">
                        <a href="https://www.google.com/maps/d/viewer?msa=0&mid=1KUWpAJRMOgiDJu729AT9BgBeIUI&ll=41.31235512450394%2C69.269813&z=15">Toshkent, Mustaqillik St, 15</a>
                        <a href="tel: +998994237618">Tel: +998 99 000 00 00</a>
                        <a href="">E-mail: hello@alibaraka.com</a>
                    </div>
                </div>

                {links.map((link) => {
                    return (
                        <div key={Math.random()} className="About">
                            <h3>{link.bold}</h3>
                            <p>{link.par1}</p>
                            <p>{link.par2}</p>
                            <p>{link.par3}</p>
                            <p>{link.par4}</p>
                        </div>
                    )
                })}
                
            </div>

            <div className="end-footer">
                <p>Все права защищены.</p>

                <div className="media">
                    <p>Разработано в</p>
                    <img src={coding} alt="coding-icon" />
                    <img src={media} alt="media-icon" />
                </div>
            </div>

            <div className="Group">
                <img src={Group} alt="Group-Image" />

            </div>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    height: 480px;
    background: #037B35;
    overflow: hidden;
    position: relative;

    .Footer {
        padding: 50px 150px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        justify-content: space-between;

        .Links {
            .titles {
                margin-top: 27px;
                display: flex;
                flex-direction: column;
                gap: 5px;
                
                a {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 25px;
                    color: #FFFFFF;
                }
            }
        }

        .About {
            h3 {
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
                color: #FFFFFF;
            }

            p {
                margin-top: 7px;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #60B45A;
                cursor: pointer;
            }
        }

    }
    
    .end-footer {
        padding: 30px 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: 400;
            font-size: 13.5px;
            line-height: 17px;
            color: #FFFFFF;
        }
        .media {
            display: flex;
            align-items: center;
            gap: 20px;

        }
    }
    .Group {
        position: absolute;
        bottom: 0;
    }
`