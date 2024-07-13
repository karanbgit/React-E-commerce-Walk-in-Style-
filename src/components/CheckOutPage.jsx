import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export default function CheckOutPage() {

    const [terms, setTerms] = useState(true)

    const finalAmount = useSelector((state) => {
        return state.cart.totalAmount
    });
    let count = useSelector((state) => {
        return state.cart.products
    })

    const [address, setAddress] = useState({

        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        address: "",
        country: "",
        state: "",
        zip: ""
    })

    function handelChange(e) {
        setAddress({ ...address, [e.target.id]: e.target.value })
    }

    function handelpaynow(e) {
        e.preventDefault()

        if (address.firstname === "" || address.middlename === "" || address.lastname === "" ||
            address.email === "" || address.address === "" || address.country === "" ||
            address.state === "" || address.zip === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are Mandatory...!",
                
            });
        }
        else if(terms){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Accept Terms & Conditions...!",
            });
        }
        else {
            setAddress({
                firstname: "",
                middlename: "",
                lastname: "",
                email: "",
                address: "",
                country: "",
                state: "",
                zip: ""

            })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">

                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">[{count.length}]</span>
                        </h4>

                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Product name</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Second product</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$8</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Third item</h6>
                                    <small class="text-muted">Brief description</small>
                                </div>
                                <span class="text-muted">$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span class="text-success">-$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total Amount </span>
                                <strong>₹ {finalAmount} /-</strong>
                            </li>
                        </ul>

                        {/* <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code" />
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form> */}

                        {/* ----------------------PAYMENT MENTHOD--------------------- */}

                        <div className='text-center'>
                            <button onClick={(e) => handelpaynow(e)} className='btn btn-success'>Pay Now</button>
                        </div>
                    </div>

                    {/* <h1>Your cart END</h1> */}



                    {/* <h1>Billing address START</h1> */}
                    <div className="col-md-8 order-md-1">
                        <h4 class="mb-3">Billing address</h4>


                        <form className='needs-validation' novalidate>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label >First name <span className='text-danger'>*</span></label>
                                    <input value={address.firstname} id='firstname' type="text" onChange={(e) => handelChange(e)} class="form-control" placeholder="first name" required />
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label >Middle name <span className='text-danger'>*</span></label>
                                    <input value={address.middlename} id='middlename' onChange={(e) => handelChange(e)} type="text" class="form-control" placeholder="middle name" required />
                                    <div class="invalid-feedback">
                                        Valid Middle name is required.
                                    </div>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label >Last name <span className='text-danger'>*</span></label>
                                    <input value={address.lastname} id='lastname' onChange={(e) => handelChange(e)} type="text" class="form-control" placeholder="last name" required />
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label>Email <span className='text-danger'>*</span></label>
                                <input value={address.email} id='email' onChange={(e) => handelChange(e)} type="email" class="form-control" placeholder="you@gmail.com" />
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label>Address <span className='text-danger'>*</span></label>
                                <input value={address.address} id='address' onChange={(e) => handelChange(e)} type="text" class="form-control" placeholder="address" required />
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-5 mb-3">
                                    <label>Country <span className='text-danger'>*</span></label>
                                    <select id="country" value={address.country} onChange={(e) => handelChange(e)} class="custom-select d-block w-100" required>
                                        <option >Choose...</option>
                                        <option value='india'>India</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label>State <span className='text-danger'>*</span></label>
                                    <select id="state" value={address.state} onChange={(e) => handelChange(e)} class="custom-select d-block w-100" required>
                                        <option >Choose...</option>
                                        <option value='maharashatra'>Maharashatra</option>
                                        <option value='goa'>Goa</option>
                                        <option value='gujarat'>Gujarat</option>
                                        <option value='assam'>Assam</option>
                                        <option value='kerala'>Kerala</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label>Zip <span className='text-danger'>*</span></label>
                                    <input value={address.zip} onChange={(e) => handelChange(e)} type="text" class="form-control" id="zip" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr class="mb-4" />
                            <div class="custom-control custom-checkbox">
                                <input onChange={()=>setTerms(false)} type="checkbox" class="custom-control-input" id="same-address" />
                                <label class="custom-control-label" for="same-address">
                                    Accepts Terms and Conditions</label>
                            </div>

                            
                            <hr class="mb-4" />
                        </form>




                    </div>
                </div>
            </div>


        </>
    )
}
