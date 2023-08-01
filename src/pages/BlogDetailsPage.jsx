import { useState, useEffect } from 'react';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import Layout from "../Layout/Layout";
import { getPostDetails } from '../ApiRequest/ApiRequest';
import { useParams } from 'react-router';
import Loader from '../components/Loader/Loader';



const BlogDetailsPage = () => {

    let {id} = useParams();
    const [details, setDetails] = useState(null);

   

    useEffect(()=>{
        
        (async ()=>{
            let result = await getPostDetails(id);
            setDetails(result);
            console.log("Fetch " + details);
        })()

    }, [id])



    return (
        <Layout>
            {
                details === null ? <Loader></Loader> : <BlogDetails newsDetails={details}></BlogDetails>
            }
        </Layout>
    );
};

export default BlogDetailsPage;