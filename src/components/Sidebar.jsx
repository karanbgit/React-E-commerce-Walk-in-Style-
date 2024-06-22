
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div class="container">
                <div class="breadcrumbs">
                    <div class="row">
                        <div class="col">
                            <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>Dashboard</span></p>
                            {/* <p class="bread"><span><Link to={"/admin/products"}>Home</Link></span> / <span>Dashboard</span>/ <span>Products</span></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-flud">
                <header>
                    <div className="row">
                        <div className="col-lg-2">
                            {/* <!-- Sidebar --> */}
                            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                                <div class="position-sticky">
                                    <div class="list-group list-group-flush mx-3 mt-4">

                                        <Link to={"/admin"} href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-solid fa-gauge-high fa-fw me-3"></i><span> Main dashboard</span>
                                        </Link>

                                        <Link to={"/admin/products"} href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fa-brands fa-product-hunt fa-fw me-3"></i><span>Products</span>
                                        </Link>


                                        <Link to={"/admin/addproducts"} href="#" class="list-group-item list-group-item-action py-2 ripple">
                                            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Add Products</span>
                                        </Link>


                                        <Link to={"/login"}><button  class="list-group-item list-group-item-action py-2 ripple"
                                        ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Logout</span>
                                        </button></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-10">
                            <Outlet />
                        </div>
                    </div>
                </header>
            </div >
        </>
    )
}
