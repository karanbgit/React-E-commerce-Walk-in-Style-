import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {

  const [newData, setNewData] = useState([]);

  function loadData() {

    axios.get("https://663daf0fe1913c47679502b5.mockapi.io/footerwear")
      .then((res) => {
        // console.log(res.data);
        setNewData(res.data)
      })
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">MRP</th>
            <th scope="col">Brand</th>
            <th scope="col">Color</th>
            <th scope="col">Size</th>
            {/* <th scope="col" >Description</th> */}
            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          {
            newData.map((eachData, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td><img src={eachData.image} style={{ width: "120px", height: "100px" }} /></td>
                  <td>{eachData.title}</td>
                  <td>{eachData.category}</td>
                  <td>{eachData.price}</td>
                  <td>{eachData.mrp}</td>
                  <td>{eachData.brand}</td>
                  <td>{eachData.color}</td>
                  <td>{eachData.size}</td>
                  {/* <td>{eachData.description}</td> */}
                  <td>
                    <button className="btn btn-primary m-1"><i class="fa-solid fa-pencil"></i></button>
                    <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              )
            })


          }

        </tbody>
      </table>

    </>
  )
}
