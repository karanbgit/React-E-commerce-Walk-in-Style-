import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function AdminLogin() {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    function handelChange(e) {
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    function handelSubmit(e) {
        e.preventDefault()

        if (input.username === "admin" && input.password === "admin") {
            navigate("/admin")
         
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Credantials...!",
            });
            setInput({
                username: "",
                password: ""
            })
        }

    }
    return (
        <>
            <div className="container">
                <section class="text-center text-lg-start">
                    <div class="container py-4">
                        <div class="row g-0 align-items-center">
                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <div class="card cascading-right bg-body-tertiary" style={{ backdropFilter: "blur(80px) " }}>
                                    <div class="card-body p-5 shadow-5 text-center">
                                        <h2 class="bold mb-5">Admin Logim</h2>
                                        <form>
                                            {/* <!-- Email input --> */}
                                            <div data-mdb-input-init class="form-outline mb-4">

                                                <input type="text" id='username' value={input.username} onChange={(e) => handelChange(e)} class="form-control" />
                                                <label class="form-label">Username</label>
                                            </div>
                                            {/* <!-- Password input --> */}
                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="password" id='password' value={input.password} onChange={(e) => handelChange(e)} class="form-control" />
                                                <label class="form-label" for="form3Example4">Password</label>
                                            </div>

                                            <Link to={"/admin"}>
                                                <button onClick={handelSubmit} type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Login</button>
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 mb-5 mb-lg-0">
                                <img src={require("../assets/images/admin_img2.jpg")} class="w-100 rounded-4 shadow-4" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
