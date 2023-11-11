import { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { BiSearch } from 'react-icons/bi'


export default function Navbar() {

  return (
    <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid d-flex justify-content-between px-5 p-1">
        <a class="navbar-brand fs-1 fw-bolder text-white" href="#">Navbar</a>
       

        <form class="d-flex  position-relative ">
          <input class="form-control border rounded-pill fw-bold bg-dark text-white" type="text" placeholder='search...' id="example-search-input" />
            <BiSearch color='' class=" text-secondary position-absolute end-0 fs-4 mt-2 me-3 " />
        </form>

        <button className='btn btn-primary rounded-5 d-flex justify-content-center align-items-center fw-bold'> <IoLocationOutline size={20} className='me-1' /> Current Location</button>
      </div>
    </nav>
  )
}
