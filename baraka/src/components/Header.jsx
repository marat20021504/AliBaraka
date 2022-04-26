import styled from "styled-components"
import headerIcon from "../assets/header-icon.svg"
import CallIcon from "../assets/Call.svg"
import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade';

const Header = () => {
    const Texts = [
        {title: "Products", to: "/products"},
        {title: "About us", to: "/products"},
        {title: "Blog", to: "/blog"},
        {title: "Contact", to: "/"}
    ]

    return (
        <Wrapper>
            <Fade top cascade>
                <Link to={"/"}>
                    <img src={headerIcon} alt="ali-baraka" />
                </Link>
                <div className="header-texts">
                    {Texts.map((text) => {
                        return (
                            <Link to={text.to}>
                                <p>{text.title}</p>
                            </Link>
                        )
                    })}
                </div>

                <div className="Contact">
                    <img src={CallIcon} alt="CallIcon" />

                    <div className="Number">
                        <a href="tel: 95-004-80-90">95-004-80-90</a>
                        <a href="tel: 94-641-40-00">94-641-40-00</a>
                    </div>
                </div>
            </Fade>


        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    position: relative;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 150px;

    .header-texts {
        
        display: flex;
        align-items: center;
        gap: 40px;

        p {
            list-style: none;
            font-weight: 400;
            font-size: 15.75px;
            line-height: 18px;
            color: #037B35;
        }
    }

    .Contact {
        display: flex;
        align-items: center;
        gap: 11px;

        .Number {
            display: flex;
            flex-direction: column;
            gap: 5px;

            a {
                font-weight: 400;
                font-size: 13.5px;
                line-height: 15px;
                color: #037B35;
            }
        }

    }
`