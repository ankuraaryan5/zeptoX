import React,{useState} from "react";

import { useNavigate } from "react-router-dom";

function Subject() {
    const [selectedClass, setSelectedClass] = useState("");
    const navigate = useNavigate();
    const handleClassChange = (event) => {
        event.preventDefault()
        setSelectedClass(event.target.value);
        navigate(`/${event.target.value}`);
    }
    return (
        <section className="mt-3 ">
            <div>
                <select className="form-select" value={selectedClass} onChange={handleClassChange}>
                    <option value="" >Select Class</option>
                    <option value="six">Class 6</option>
                    <option value="seven">Class 7</option>
                    <option value="eight">Class 8</option>
                    <option value="nine">Class 9</option>
                    <option value="ten">Class 10</option>
                </select>
            </div>
            <h1 className="text-center text-light text-decoration-underline mb-3">List Of Subjects</h1>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Science.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/RgxtgC3sA" className="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Maths.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/English.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Javascript</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="card text-bg-dark">
                        <div className="card-body">
                            <img src="../../images/Hindi.jpg" className="img-fluid" alt="" />
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="https://rzp.io/l/VGduY5sa" class="btn btn-primary text-bg-dark">Buy Now</a> */}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Subject;
