import { Rating, Slider } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AllCatagories = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <h1 className='text-center text-4xl mt-20 font-bold'>All Categories</h1>
            <p className='text-center mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.
            </p>
            <div className='container mx-auto mt-14'>
                <div className=" border p-4 overflow-y-auto">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <div className='menu  w-64 '>
                        <ul className="bg-base-100 text-base-content h-[550px] color-scroll overflow-x-auto">
                            {/* Sidebar content here */}
                            <li className='hover:bg-base-100'>
                                <h2 className='font-bold text-neutral hover:bg-base-100'>All Ctaegories</h2>
                            </li>
                            <li>
                                <Link to={'#'}>Computer & Laptop <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Mobile & Tablet <span className='text-accent'>(135)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Camara <span className='text-accent'>(255)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>TV & Smart Box <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Home Appliance<span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Smart Watch <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Microphone & Audio <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Gaming <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Printer <span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>Accessories<span className='text-accent'>(25)</span></Link>
                            </li>
                            <li>
                                <Link to={'#'}>More Catagories <span className='text-accent'>(25)</span></Link>
                            </li>
                        </ul>
                        {/* Filter by price */}
                        {/* Filter by price */}
                        <div className="divider mt-10"></div>
                        <div className='mx-1'>
                            <h1 className='flex items-center justify-between w-full'>Filter by price <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                            <h1 className='text-accent'>Price : <span className='font-bold text-neutral'>$100-$206</span></h1>
                            {/* Filter by Location  */}
                            {/* Filter by Location  */}
                            {/* Filter by Location  */}
                            <h1 className='flex mt-8 items-center justify-between w-full'>Filter by Location <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <div className="form-control mt-5">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Bangladesh</span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Australia</span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Jarman</span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label cursor-pointer">
                                    <span className="label-text">China</span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                        </div>
                        <div className="divider mt-10"></div>
                        <div className='mx-1'>
                            <h1 className='flex items-center justify-between w-full'>Filter by Ratings <i className="fa-solid cursor-pointer fa-angle-down"></i></h1>
                            <div className="form-control mt-5">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        <Rating
                                            name="simple-controlled"
                                            value={1}
                                            style={{color: '#F46B5B'}}
                                        />
                                        </span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        <Rating
                                            name="simple-controlled"
                                            value={2}
                                            style={{color: '#F46B5B'}}
                                        />
                                        </span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        <Rating
                                            name="simple-controlled"
                                            value={3}
                                           style={{color: '#F46B5B'}}
                                        />
                                        </span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        <Rating
                                            name="simple-controlled"
                                            value={4}
                                            style={{color: '#F46B5B'}}
                                        />
                                        </span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        <Rating
                                            name="simple-controlled"
                                            value={5}
                                            style={{color: '#F46B5B'}}
                                        />
                                        </span>
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                        </div>


                        {/* end */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AllCatagories