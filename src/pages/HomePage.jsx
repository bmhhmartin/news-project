import Layout from '../Layout/Layout';
import Footer from '../components/Footer/Footer';
import LatestBlog from '../components/LatestBlog/LatestBlog';

const HomePage = () => {
    return (
        <Layout>
            <LatestBlog></LatestBlog>
            <Footer></Footer>
        </Layout>
    );
};

export default HomePage;