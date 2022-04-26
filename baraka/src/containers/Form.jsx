import styled from "styled-components"
import dehqon from "../assets/dehqon.png"
import green from "../assets/green.svg"
import radius from "../assets/radius.svg"

const Form = () => {

    return (
        <Wrapper>

            <div className="container">
                <img src={dehqon} alt="dehqon" />

                <div className="Create">
                    <h1>Still are you <br /> hesitating?</h1>
                    <p>Your work is going to fill a large part of your life, and the only way <br /> to be truly satisfied.</p>
                
                    <div className="Inputs">
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter phone tel" />
                    </div>

                    <textarea  rows="8" placeholder="Enter your subject"></textarea>
                    <button>SEND MESSAGE</button>
                </div>
            </div>

            <img className="Green" src={green} alt="green" />
            <img className="Radius" src={radius} alt="radius" />

        </Wrapper>
    )
}

export default Form;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 150px;
    position: relative;

    .Green {
        position: relative;
        left: 20%;
        top: 100px;
    }

    .Radius {
        position: relative;
        top: 430px;
        left: 700px;
    }

    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 540px;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 8px 28px rgba(83, 83, 83, 0.15);
        border-radius: 15px;

        .Create {
            padding: 40px;

            h1 {
                font-weight: 800;
                font-size: 29px;
                line-height: 28px;
                text-align: center;
                text-transform: uppercase;
                color: #000000;
            }
    
            p {
                margin-top: 20px;
                font-weight: 400;
                font-size: 15px;
                line-height: 26px;
                text-align: center;
                color: #000000;
            }

            .Inputs {
                margin-top: 22px;
                display: flex;
                justify-content: space-between;

                input {
                    width: 218px;
                    height: 60px;
                    padding: 20px;
                    background: #F8F8F8;
                    border: 1px solid #E7E7E7;
                    border-radius: 6px;
                    outline: none;
                }
            }

            textarea {
                width: 100%;
                margin-top: 30px;
                padding: 20px;
                background: #F8F8F8;
                border: 1px solid #E7E7E7;
                border: none;
                border-radius: 6px;
                outline: none;
            }

            button {
                margin-top: 20px;
                width: 100%;
                height: 50px;
                background: #037B35;
                border-radius: 30px;
                font-size: 15px;
                text-align: center;
                color: #FFFFFF;
                border: none;
                cursor: pointer;
            }
        }
    }
`