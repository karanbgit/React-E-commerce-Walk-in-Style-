import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


export default function AddProducts() {
  const [data, setData] = useState({

    title: "",
    category: "",
    price: "",
    mrp: "",
    brand: "",
    color: "",
    size: "",
    image: "",
    description: ""
  });

  function handelChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.id);
    setData({ ...data, [e.target.id]: e.target.value });

  }

  function handelSubmit(e) {

    e.preventDefault()
    // console.log(data);
    if (data.title === "" || data.category === "" || data.price === "" ||
      data.mrp === "" || data.brand === "" || data.color === "" || data.size === ""
      || data.image === "" || data.description === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are Mandatory...!",
      });
    }
    else {
      axios.post("https://663daf0fe1913c47679502b5.mockapi.io/footerwear", data)
        .then((res) => {
          console.log(res.data);
        })
      setData({
        title: "",
        category: "",
        price: "",
        mrp: "",
        brand: "",
        color: "",
        size: "",
        image: "",
        description: ""
      })
    }
  }

  return (
    <><div>
      <form>
        <div class="row">
          <div class="col-lg-6 form-outline">
            <label class="form-label">Title <span className='text-danger'>*</span></label>
            <input value={data.title} id='title' onChange={(e) => handelChange(e)} class="form-control" type="text" />
          </div>
          <div class="col-lg-5">
            <label class="form-label">Category <span className='text-danger'>*</span></label>
            <select id='category' value={data.category} onChange={(e) => handelChange(e)} class="form-select">
              <option >Choose...</option>
              <option value='male' >Male</option>
              <option value='female' >Female</option>
              <option value='kids' >Kids</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div class="col-lg-3 mt-3">
            <label class="form-label">Price <span className='text-danger'>*</span></label>
            <input id='price' value={data.price} onChange={(e) => handelChange(e)} class="form-control" type="number" />
          </div>
          <div class="col-lg-3 mt-3">
            <label class="form-label">MRP <span className='text-danger'>*</span></label>
            <input id='mrp' value={data.mrp} onChange={(e) => handelChange(e)} class="form-control" type="number" />
          </div>
          <div class="col-lg-3 mt-3">
            <label class="form-label">Image <span className='text-danger'>*</span></label>
            <input id='image' value={data.image} onChange={(e) => handelChange(e)} class="form-control" type="text" />
          </div>

        </div>
        <div className="row">

          <div class="col-lg-3 mt-2">
            <label class="form-label">Brand <span className='text-danger'>*</span></label>
            <input id='brand' value={data.brand} onChange={(e) => handelChange(e)} class="form-control" type="text" />
          </div>
          <div class="col-lg-3 mt-2">
            <label class="form-label">Color <span className='text-danger'>*</span></label>
            <input id='color' value={data.color} onChange={(e) => handelChange(e)} class="form-control" type="text" />
          </div>
          <div class="col-lg-3 mt-2">
            <label class="form-label">Size <span className='text-danger'>*</span></label>
            <input id='size' value={data.size} onChange={(e) => handelChange(e)} class="form-control" type="number" />
          </div>
        </div>
        <div class="row ">
          <div class="col-lg-8 mt-2">
            <label class="form-label">Description <span className='text-danger'>*</span></label>
            <textarea id='description' value={data.description} onChange={(e) => handelChange(e)} class="form-control"></textarea>
          </div>

          <div className="col-lg-3 mt-5">
            <button onClick={(e) => handelSubmit(e)} class="btn btn-success" > Submit</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
