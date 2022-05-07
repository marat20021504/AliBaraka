import styled from "styled-components"
import BackgroundImg  from "../assets/backround-image.png"
import Header from "../components/Header";
import Icon from "../assets/ВСЕ ДЛЯ ТЕПЛИЦ.svg"
import btnIcon from "../assets/btn-icon.svg"
import PlayIcon from "../assets/Icon.svg"
import SqrtIcon from "../assets/sqrt.svg"
import play from "../assets/play.svg"
import Image1 from "../assets/image 44.png"
import Image2 from "../assets/image 33.png"
import Image3 from "../assets/image 43.png"
import Products from "./Products";
import Blogs from "./Blogs";
import Form from "./Form";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <Wrapper style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <Header />
            <div className="Container">
                <Fade top cascade>
                    <div className="Info">
                        <img src={Icon} alt="Icon" />

                        <p>
                            Here will be brief information about our company and <br />
                            some of advantages of our offers. Here will be brief <br /> 
                            information about our company.
                        </p>

                        <button>EXPLORE <img src={btnIcon} alt="Icon" /></button>
                    </div>
                </Fade>

                <Fade right cascade>
                    <div className="Style">
                        <img className="Ellips" src={PlayIcon} alt="PlayIcon" />
                        <img className="Sqrt-icon" src={SqrtIcon} alt="SqrtIcon" />

                        <div className="play">
                            <img src={play} alt="play-icon" />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="Images">
                <img src={Image1} alt="Image1" />
                <img className="Image-2" src={Image2} alt="Image2" />
                <img className="Image-3" src={Image3} alt="Image3" />
            </div>

            <Products />

            <Blogs />

            <Form />

            <Footer />
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    .Container {
        width: 100%;
        height: calc(100vh - 138px);
        display: flex;
        .Info {
            padding-top: 130px;
            width: 50%;
            height: 100%;
            padding-left: 150px;

            p {
                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                color: rgba(255, 255, 255, 0.55);
            }

            button {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 155px;
                height: 55px;
                padding: 11px 22px;
                margin-top: 15px;
                background: #FCBD17;
                border-radius: 26.5px;
                border: none;

                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                color: #FFFFFF;
                cursor: pointer;
                transition: 0.3s ease;

                &:hover {
                    background-color: white;
                    color: #FCBD17;
                    border: 3px solid #FCBD17;
                }
            }
        }

        .Style {
            width: 50%;
            height: 100%;
            position: relative;

            .Ellips {
                width: 100%;
            }

            .Sqrt-icon {
                position: absolute;
                z-index: 1;
                top: 33px;
                left: 180px;
            }

            .play {
                position: absolute;
                top: 140px;
                left: 285px;
                width: 180px;
                height: 180px;
                background: #FED372;
                opacity: 0.5;
                padding: 48px 48px 48px 68px;
                border-radius: 50%;
            }
        }
    }

    .Images {
        overflow: hidden;
        position: relative;
        bottom: 30px;
        display: flex;
        align-items: center;

        img {
            z-index: 1000;
        }

        .Image-2 {
            position: relative;
            left: -60px;
            z-index: 300;
        }

        .Image-3 {
            position: relative;
            right: 120px;
            z-index: 400;
        }
    }
`