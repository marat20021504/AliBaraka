import styled from "styled-components";
import archa from "../assets/archa.png"
import traktor from "../assets/traktor.png"
import tomorrow from "../assets/tomorrow.png"
import agorod from "../assets/agorod.png"
import sky from "../assets/sky.png"
import Img1 from "../assets/foter-1.png"
import Img2 from "../assets/foter-2.png"
import microsoft from "../assets/logos_microsoft.svg"
import google from "../assets/logos_google.svg"
import slack from "../assets/logos_slack.svg"
import wordpress from "../assets/logos_wordpress.svg"
import right from "../assets/right.svg"
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Fade from 'react-reveal/Fade';
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import API from "../utils/axios";

const Products = () => {
    const {pathname} = useLocation()
    const [products, setProducts] = useState([])


    useEffect(() => {
        API.get("/products/")
            .then((response) => {
                setProducts(response.data);
        });
      }, []);

    return (
        <Wrapper>   

            {(pathname === "/products") &&
                <Header />    
            }

            <img className="Archa" src={archa} alt="archa" />

            <div className="Product-container">

                <Fade top cascade>
                    <div className="Texts-btn">
                        <div className="Texts">
                            <h1>our production</h1>
                            <p>
                                "Your work is going to fill a large part of your life, and the only way to <br />
                                be truly satisfied is to do what you believe is great work]</p>
                        </div>
                        
                        <Link to={"/create-product"}>
                            <button>Create Product</button>
                        </Link>
                    </div>
                </Fade>

                <div className="product-grid">
                        {products.map((product) => {
                            return(
                                <Product key={Math.random()}  product={product} />
                            )
                        })}
                </div>

                <div className="Company">
                    <Fade left cascade>
                        <div className="our_Company">
                            <h2>little ABout our <br /> company </h2>
                            <p>"
                                Your work is going to fill a large part of your life, and the only way to <br /> 
                                be truly satisfied is to do what you believe is great work. And the <br /> 
                                only way to do great work is to love what you do."
                            </p>
                            <div className="buttons">
                                <button>MORE ABOUT</button>
                                <button><a href="https://www.youtube.com/">OUR YOUTUBE</a></button>
                            </div>
                        </div>
                    </Fade>

                    <Fade right cascade>
                        <div className="our_image">
                            <div className="image-1">
                                <img className="Traktor" src={traktor} alt="traktor" />
                                <img className="Tomorrow" src={tomorrow} alt="tomorrow" />
                            </div>

                            <div className="image-2">
                                <img className="Agorod" src={agorod} alt="agorod" />
                                <img className="Sky" src={sky} alt="sky" />
                            </div>
                        </div>
                    </Fade>

                </div>

            </div>

            <div className="Company-images">
                <img src={Img2} alt="Img2" />
                <img src={Img1} alt="Img1" />
                <img src={Img2} alt="Img2" />
            </div>

            <div className="google">
                <p>Trusted <br /> by</p>
                <img src={microsoft} alt="microsoft" />
                <img src={google} alt="google" />
                <img src={slack} alt="slack" />
                <img src={wordpress} alt="wordpress" />
                <img src={right} alt="right" />
            </div>

            {(pathname === "/products") &&
                <Footer />    
            }
            
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
    position: relative;
    .Archa {
        width: 15%;
        position: absolute;
        top: -200px;
        z-index: 0;
    }

    .Product-container {
        width: 100%;
        height: auto;
        position: relative;
        z-index: 500;
        padding: 0 150px;

        .Texts-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .Texts {
                padding-left: 20px;
    
                h1 {
                    font-weight: 800;
                    font-size: 56px;
                    line-height: 54px;
                    text-transform: uppercase;
                    color: #000000;
                }
    
                p {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 26px;
                    color: #000000;
                }
            }

            button {
                width: 200px;
                height: 50px;
                background: #037B35;
                border-radius: 30px;
                font-size: 15px;
                text-align: center;
                color: #FFFFFF;
                border: none;
                cursor: pointer;
                transition: 0.5s ease;

                &:hover {
                    color: #037B35;
                    background-color: white;
                    border: 1px solid #037B35;
                }
            }

        }

        .product-grid {
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 10px;
        }

        .Company {
            margin-top: 100px;
            width: 100%;
            display: flex;
            align-items: center;

            .our_Company {
                h2 {
                    font-weight: 800;
                    font-size: 46px;
                    line-height: 54px;
                    text-transform: uppercase;
                    color: #000000;
                }

                p {
                    padding: 30px 0;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 26px;
                    color: #000000;
                }

                .buttons {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    button {
                        width: 200px;
                        height: 50px;
                        border: 2px solid #037B35;
                        border-radius: 30px;
                        background-color: transparent;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 30px;
                        color: #037B35;
                        cursor: pointer;
                        transition: 0.5s ease;

                        &:hover {
                            background-color: #037B35;
                            color: white;
                        }
                    }

                    a {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 30px;
                        color: #037B35;

                        &:hover {
                            color: white;
                        }
                    }
                }
            }

            .our_image {
                position: relative;
                display: flex;
                z-index: 1000;

                .image-1 {
                    position: relative;

                    .Traktor {
                        position: absolute;
                        top: 170px;
                        left: 40px;
                    }
                }

                .image-2 {
                    position: absolute;
                    z-index: -1;

                    .Agorod {
                        position: absolute;
                        top: -50px;
                        left: 200px;
                    }

                    .Sky {
                        position: absolute;
                        top: -280px;
                        right: -705px;
                    }
                }
            }
        }
    }

    .Company-images { 
        overflow: hidden;
        top: 120px;
        position: relative;
        z-index: 1000;
        display: flex;
        align-items: center;
    }

    .google {
        position: relative;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: space-around;

        p {
            color: #037B35;
        }
    }
`