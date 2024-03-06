import React, { FormEvent, useState } from 'react'

const Forms = () => {

   
        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [birthday, setBirthday] = useState('');
        const [role, setRole] = useState('');
        const [isChecked, setIsChecked] = useState(false);
      
        const handleSubmit = (event: FormEvent) => {
          event.preventDefault(); // Prevent default form submission behavior
      
          console.log({
            name: name,
            surname: surname,
            birthday: birthday,
            role: role,
            isChecked: isChecked,
          });
        };
    return (
        <div>
            <form className='w-50 d-flex flex-column m-auto mt-5'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    name='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Surname</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                     />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Birthday</label>
                    <input 
                    type="date" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)} />
                    <select 
                    className="form-select mt-4" 
                    aria-label="Default select example" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}>
                        <option value="Ps">Programmer Senior</option>
                        <option value="Pj">Programmer Junior</option>
                        <option value="Dir">Director</option>
                    </select>
                </div>
                <div className="mb-3 form-check d-flex align-items-center justify-content-center">
                    <input 
                    type="checkbox" 
                    className="form-check-input mx-4" 
                    id="exampleCheck1" 
                    onChange={(e) => setIsChecked(e.target.checked)}/>
                    <label 
                    className="form-check-label" htmlFor="exampleCheck1">Authorization</label>
                </div>
                <button 
                onClick={handleSubmit} 
                type="submit" 
                className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Forms
