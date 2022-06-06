import React from 'react'

const AllCatagories = () => {
    return (
        <div>
            <h1 className='text-center text-4xl mt-20 font-bold'>All Categories</h1>
            <p className='text-center mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.
            </p>
            <div className='container mx-auto mt-14'>
                <div className="drawer drawer-mobile ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side border p-4">
                        <label htmlFor="my-drawer-2" className="drawer-overlay" />
                        <ul className="menu  overflow-y-auto w-64 bg-base-100 text-base-content">
                            {/* Sidebar content here */}
                            <h2 className='font-bold text-neutral'>All Ctaegories</h2>
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllCatagories