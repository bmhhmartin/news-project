import { Container } from "react-bootstrap";
import ListBlog from "../ListBlog/ListBlog";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getByCategoryPost } from "../../ApiRequest/ApiRequest";
import Loader from "../Loader/Loader";


const ByCategoryDetails = () => {

    const [post, setPost] = useState(null);

    let {id} = useParams();

    useEffect(()=>{

        (async ()=>{
            let result = await getByCategoryPost(id);
            setPost(result);
        })()

    }, [id])


    return (
        <div>
            <Container fluid={true} className="mt-5">

                {
                    post === null ? <Loader></Loader> : <ListBlog list={post}></ListBlog>
                }
                
            </Container>
        </div>
    );
};

export default ByCategoryDetails;