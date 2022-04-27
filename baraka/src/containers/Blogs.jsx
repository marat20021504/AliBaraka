import styled from "styled-components";
import flags from "../assets/flags-white 1.png"
import flagsMockup from "../assets/flags-glossy-mockup 2.png"
import Client from "../assets/Client.png"
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';

const Blogs = () => {
    const {pathname} = useLocation()

    return (
        <Wrapper>
            {(pathname === "/blog") &&
                <Header />    
            }

            <div className="image-Text">
                <Fade left cascade>
                    <img className="Flags" src={flags} alt="flags" />
                    <img className="Mockup" src={flagsMockup} alt="flagsMockup" />
                </Fade>

                <Fade right cascade>
                    <div className="info-text">
                        <h2>See why we are <br /> trusted the world <br /> over</h2>
                        <p>The first rule of any technology used in a business is that automation <br /> applied to an efficient operation will magnify the efficiency.</p>

                        <div className="Boxs">
                        <div className="box">
                                <b>Do you provide customer <br /> support?</b>
                                <span>+</span>
                        </div>

                        <div className="box">
                                <b style={{color: "#FCBD17"}}>How much traffic can the <br /> hosting handle?</b>
                                <span>+</span>
                        </div>

                        <div className="box">
                                <b>Do you provide customer <br /> support?</b>
                                <span>+</span>
                        </div>

                        <div className="box">
                                <b style={{color: "#FCBD17"}}>What is your return <br /> policy?</b>
                                <span>+</span>
                        </div>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="box-model">

                <Fade left cascade>
                    <div className="Client">
                        <b>How our client made <br /> 10x revenue</b>

                        <div className="man" style={{ backgroundImage: `url(${Client})` }}>
                            <div className="man-info">
                                <p>"I learned so much, <br /> even as a <br /> professional".</p>
                                <b>"Ut vehicula lacus <br /> a lacus tempor, nec viverra justo <br /> condimentum. Integer eu urna <br /> dapibus, scelerisque nisl non, <br /> semper ipsum. Etiam dolor arcu, <br /> tincidunt a arcu eget."</b>
                                <span>Juan Huang</span>
                            </div>

                            <button>more stories</button>
                        </div>
                    </div>
                </Fade>

                <Fade right cascade>
                    <div className="Stories">
                        <h2>Other successful <br /> stories</h2>

                        <div className="title">
                            <p>Amateur</p>
                            <b>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius.</b>
                            <span>More Information</span>
                        </div>

                        <div className="title">
                            <p>Beginner</p>
                            <b>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius.</b>
                            <span>More Information</span>
                        </div>
                        
                        <div className="title">
                            <p>Professional</p>
                            <b>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius.</b>
                    </div>
                            <span>More Information</span>
                    </div>
                </Fade>

            </div>

            {(pathname === "/blog") &&
                <Footer />    
            }
        </Wrapper>
    )
}

export default Blogs;

const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .image-Text {
        display: flex;
        align-items: center;
        position: relative;

        .Flags {
            position: relative;
            z-index: 3000;
            top: -130px;
        }

        .Mockup {
            top: 620px;
            position: absolute;
            left: 0;
        }

        .info-text {
            h2 {
                font-weight: 800;
                font-size: 40px;
                line-height: 35px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #037B35;
            }

            p {
                margin-top: 8px;
                font-weight: 400;
                font-size: 15px;
                line-height: 26px;
                color: #1E252B;
            }

            .Boxs {
                margin-top: 25px;
                width: 500px;
                border: 1px solid #E7E7E7;
                border-radius: 20px;

                .box {
                    padding: 30px 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    b {
                        font-weight: 800;
                        font-size: 16px;
                        line-height: 19px;
                        text-transform: uppercase;
                        color: #037B35;
                    }

                    span {
                        font-size: 40px;
                        color: #037B35;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .box-model {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        top: -100px;
        padding: 0 150px;

        .Client {
            width: 50%;
            position: relative;
            .man {
                width: 100%;
                height: 600px;

                button {
                    position: absolute;
                    bottom: 35px;
                    right: -15px;
                    width: 145px;
                    height: 50px;
                    background: #037B35;
                    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.3);
                    border-radius: 49px;
                    border: none;
                    font-size: 15px;
                    line-height: 23px;
                    color: #FFFFFF;
                    cursor: pointer;
                    transition: 0.3s ease;

                    &:hover {
                        background-color: white;
                        color: #037B35;
                        border: 2px solid #037B35;
                    }
                }
            }

            b {
                font-weight: 800;
                font-size: 28px;
                line-height: 30px;
                color: #444444;
            }

            .man-info {
                position: absolute;
                padding: 30px;
                bottom: 0;
                width: 275px;
                height: 300px;
                background: #FFFFFF;
                filter: drop-shadow(21px 21px 70px rgba(0, 0, 0, 0.2));

                p {
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 25px;
                    color: #037B35;
                }

                b {
                    margin: 22px 0 18px 0;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 23px;
                    color: #050505;
                }

                span {
                    display: block;
                    font-size: 13px;
                    line-height: 23px;
                    color: #037B35;
                }
            }
        }

        .Stories {
            width: 50%;
            background: #FFFFFF;
            padding: 50px;

            h2 {
                margin-bottom: 15px;
                font-weight: 800;
                font-size: 42.5382px;
                line-height: 40px;
                color: #444444;
            }

            .title {
                border-top: 1px solid #DADADA;
                p {
                    margin: 14px 0 8px 0;
                    font-weight: 800;
                    font-size: 20px;
                    line-height: 25px;
                    color: #037B35;
                }

                b {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 23px;
                    color: #363636;
                }

                span {
                    margin-top: 24px;
                    display: block;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 23px;
                    color: #037B35;
                }
            }
        }
    }

`