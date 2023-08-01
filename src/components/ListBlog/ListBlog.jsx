import { Col, Card, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";

const ListBlog = ({list}) => {
    return (
        <Row>
            {
                list.map((post, index)=>(
                            <Col lg={3} md={4} sm={6} key={index.toString()}>
                                <Card className='newsCard'>
                                    <Card.Img variant="top" src={list.img ==" " ? <Loader></Loader> : post.img} />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text className='mb-2'>
                                            {post.short.slice(0,80)}.....
                                        </Card.Text>
                                        <NavLink className="detailsBtn" to={'/post-details/' + post['id']}>বিস্তারিত...</NavLink>
                                    </Card.Body>
                                </Card> 
                            </Col>
                ))
            }
        </Row>
    );
};

export default ListBlog;