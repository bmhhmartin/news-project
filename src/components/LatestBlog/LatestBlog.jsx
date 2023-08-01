import { useState, useEffect } from 'react';
import { getNewsLatest } from '../../ApiRequest/ApiRequest';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ListBlog from '../ListBlog/ListBlog';
import Loader from '../Loader/Loader';

const LatestBlog = () => {

    const [blog, setBlog] = useState(null);

    useEffect(()=>{
        (async ()=>{
           let result = await getNewsLatest();
           setBlog(result);
        })()
    }, []);

    return (
        <div>
            <h1 className='pageTitle text-center my-5'>সর্বশেষ সংবাদ</h1>
           <Container fluid={true}>
                {
                    blog === null ? <Loader></Loader> : <ListBlog list={blog}></ListBlog>
                }
           </Container>
        </div>
    );
};

export default LatestBlog;