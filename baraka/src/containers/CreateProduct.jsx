import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import API from "../utils/axios";


const CreateProduct = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [file, setFile] = useState(null)

    const submit = () => {
        let form = new FormData();

        form.append("name", name)
        form.append("text", text)
        form.append("image", file)

        API.post("/products/", form)
            .then(res => {
                navigate("/")
            })
    }

    return (
        <Create>
            <Header />
            <div className="Inputs">
                <input onChange={(({target}) => setName(target.value))} type="text" placeholder="Name" />
                <input onChange={(({target}) => setText(target.value))} type="text" placeholder="Text" />
                <input onChange={(({target}) => setFile(target.files[0]))} type="file" />
                <button onClick={submit}>Post Products</button>
            </div>
        </Create>
    )
}

export default CreateProduct;

export const Create = styled.div`
    width: 100%;
    height: 100vh;

    .Inputs {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        input {
            display: block;
            width: 596px;
            margin-bottom: 15px;
            outline: none;
            border: none;
            background: #FFFFFF;
            box-shadow: 4px 4px 16px rgba(48, 20, 209, 0.15);
            border-radius: 13px;
            padding: 10px 24px;
            font-size: 16px;
            color: #585858;
        }

        button {
            margin: auto;
            display: block;
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
`