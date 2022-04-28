import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import API from "../utils/axios";
import { Create } from "./CreateProduct";


const CreateStories = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [file, setFile] = useState(null)

    const submit = () => {
        let form = new FormData();

        form.append("name", name)
        form.append("text", text)
        form.append("image", file)

        API.post("/stories/", form)
            .then(res => {
                navigate("/stories")
            })
    }

    return(
        <Wrapper>
            <Header />
            <div className="Inputs">
                <input onChange={(({target}) => setName(target.value))} type="text" placeholder="Name" />
                <input onChange={(({target}) => setText(target.value))} type="text" placeholder="Text" />
                <input onChange={(({target}) => setFile(target.files[0]))} type="file" />
                <button onClick={submit}>Post Stories</button>
            </div>
        </Wrapper>
    )
}

export default CreateStories;

const Wrapper = styled(Create)`
    
`