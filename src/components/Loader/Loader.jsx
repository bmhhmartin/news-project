import loader from "../../assets/images/loader.gif";

const Loader = () => {
    return (
        <div className="text-center">
            <img src={loader} alt="Loader" className="img-fluid" />
        </div>
    );
};

export default Loader;