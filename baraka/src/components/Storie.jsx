import styled from "styled-components"
import Fade from 'react-reveal/Fade';


const Storie = ({store}) => {
    return (
        <Wrapper>
            <Fade bottom cascade>
                <div key={store.id} className="Product">
                    <img src={store.image} alt="image" />

                    <div className="Turlari">
                        <h3>{store.name}</h3>
                        <p>{store.text}</p>
                    </div>
                </div>
            </Fade>
        </Wrapper>
    )
}

export default Storie;

const Wrapper = styled.div`
    .Product {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 15px;
        height: 200px;
        background: #FFFFFF;
        border: 0.8325px solid #D9DCEC;
        box-sizing: border-box;
        border-radius: 8.325px;
        transition: .1s ease;
        cursor: pointer;

        img {
            width: 50%;
            height: 100%;
        }

        &:hover {
            border: 3px solid #037B35;
        }

        .Turlari {
            width: 50%;
            h3 {
                margin-bottom: 13px;
                font-weight: 800;
                font-size: 20px;
                line-height: 22px;
                text-transform: uppercase;
                color: #000000;
            }

            p {
                font-weight: 400;
                font-size: 11.655px;
                line-height: 20px;
                color: #000000;
            }
        }
    }
    
`