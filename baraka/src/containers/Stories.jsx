import styled from "styled-components"
import API from "../utils/axios"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import Storie from "../components/Storie"
import { Link } from "react-router-dom"


const Stories = () => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        API.get("/stories/")
            .then(res => setStories(res.data))
    }, [])

    return (
        <Wrapper>
            <Header />

            <Link to={"/create-stories"}>
                <button>Create Stories</button>
            </Link>
            <div className="Stories">
                {stories.map((store) => {
                    return (
                        <Storie key={Math.random()} store={store} />
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default Stories;

const Wrapper = styled.div`
    width: 100%;
    height: auto;

    button {
        display: block;
        margin: auto;
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

    .Stories {
        padding: 30px 150px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 10px;
    }
`