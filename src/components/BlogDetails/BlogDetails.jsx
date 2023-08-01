import { Container, Form, Button } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";


const BlogDetails = ({newsDetails}) => {

    return (
        <div>
            {
                newsDetails.postDetails === null ? <Loader></Loader> : <Container>
                    <div className="blogWrap">
                        <div className="blogImage">
                            <img className="img-fluid" src={newsDetails.postDetails.img} alt="blog-picture" />
                        </div>
                        <div className="blogTitle">
                            <h1>{newsDetails.postDetails.title}</h1>
                        </div>
                        <div className="blogDetails">
                            {newsDetails.postDetails.content}
                        </div>


                        <div className="commentArea">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Enter your comments</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Comment
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Container>
            }
            {
                newsDetails.postDetails === null ? <h3 className="text-center px-2">বিস্তারিত তথ্য পাওয়া যায় নি !!!<Link to='/'> হোম পেজে যান</Link></h3> : " "
            }
            

        </div>
    );
};

export default BlogDetails;