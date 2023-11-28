import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Adduser = () => {
    const [user, setUser] = useState({
        lastname: '',
        firstname: '',
        middlename: '',
        birthdate: '',
        category_id: '',
        email: '',
        password: '',
        image: ''
    })
    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_user', user)
        .then(result =>{
            if(result.data.Status) {
                navigate('/dashboard/user')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center mt-6'>
        <div className='p-2 rounded w-75 border'>
            <h3 className='text-center'>Add Resident</h3>
            <form className='row g-0.3' onSubmit={handleSubmit}>

                <div className='col-12'>
                    <label htmlFor="inputLastname" className='form-label'>Lastname: </label>
                    <input type="text" name='inputLastname' placeholder='Enter Lastname'
                     onChange={(e) => setUser({...user, lastname: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputFirstname" className='form-label'>Firstname: </label>
                    <input type="text" name='inputFirstname' placeholder='Enter Firstname'
                     onChange={(e) => setUser({...user, firstname: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputMiddlename" className='form-label'>Middlename: </label>
                    <input type="text" name='inputMiddlename' placeholder='Enter Middlename'
                     onChange={(e) => setUser({...user, middlename: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputBirthdate" className='form-label'>Birthdate: </label>
                    <input type="date" name='inputBirthdate' placeholder='Enter Birthdate'
                     onChange={(e) => setUser({...user, birthdate: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label For="category" className='form-label'>Category</label>
                    <select name="category" id="category" className='form-select'
                     onChange={(e) => setUser({...user, category_id: e.target.value})}>
                        {category.map(c => {
                            return <option value={c.name}>{c.name}</option>
                        })}
                    </select>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputEmail" className='form-label'>Email: </label>
                    <input type="email" name='inputEmail' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setUser({...user, email: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputPassword" className='form-label'>Password: </label>
                    <input type="password" name='inputPassword' placeholder='Enter Password'
                     onChange={(e) => setUser({...user, password: e.target.value})} className='form-control rounded-0'/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputGroupFile01" className='form-label'>Select Image: </label>
                    <input type="file" name='inputGroupFile01'
                     onChange={(e) => setUser({...user, image: e.target.files})} className='form-control rounded-0'/>
                </div>

                <button className='btn btn-success w-65 rounded-0 mb-1'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Adduser