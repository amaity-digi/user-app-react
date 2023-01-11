import {useState,useRef } from 'react';
import './App.css';

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    dateOfBirth:"",
    phoneNumber:"",
    image:""
  });

  const [submittedFormData, setsubmittedFormData] = useState({
    name:"",
    email:"",
    dateOfBirth:"",
    phoneNumber:"",
    image:""
  });

  const imageRaf = useRef(null);

  const handleForm = e=> {
    setFormData({
      ...formData,
      [e.target.name] : e.target.files && e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    setsubmittedFormData(formData);
    setIsSubmitted(true);
    setFormData({
      name:"",
    email:"",
    dateOfBirth:"",
    phoneNumber:"",
    image:""
   })
   imageRaf.current.value=null
  }
  const handleDelete = e => {
    setFormData({
      name:"",
    email:"",
    dateOfBirth:"",
    phoneNumber:"",
    image:""
   })
   imageRaf.current.value=null
    setIsSubmitted(false);
  }

  const handleEdit = () =>{
    setFormData(submittedFormData)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input name="name" value={formData.name} type="text" onChange={handleForm}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input name="email" value={formData.email} type="email" onChange={handleForm} />
        </div>
        <div>
          <label htmlFor='dateOfBirth'>DateOfBirth</label>
          <input name="dateOfBirth" value={formData.dateOfBirth} type="date" onChange={handleForm}/>
        </div>
        <div>
          <label htmlFor='phoneNumber'>PhoneNumber</label>
          <input name="phoneNumber" value={formData.phoneNumber} type="tel" onChange={handleForm}/>
        </div>
        <div>
          <label htmlFor='image'>Image</label>
          <input name="image" type="file" ref={imageRaf} onChange={handleForm}/>
        </div>
        <div>
          <input type="submit" value="Save" onClick={handleSubmit} />
        </div>
      </form>
      {
       isSubmitted && (
        <div className='user-info'>
            <img src={submittedFormData.image} alt={submittedFormData.name} />
            <p>{submittedFormData.name}</p>
            <p>{submittedFormData.email}</p>
            <p>{submittedFormData.dateOfBirth}</p>
            <p>{submittedFormData.phoneNumber}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete} >Delete</button>
        </div>
       )
      }
    </div>
  );
}

export default App;