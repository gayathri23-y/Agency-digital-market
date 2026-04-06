import React from 'react'
import Getintouch from './Components/Contact/Getintouch'
import TestimonialSection from './Pages/Testimonal';
import Form from './Components/Contact/Form';
import ContactInfoCards from './Components/Contact/ContactInfoCards';
import Startegy from "./Components/Contact/Startegy";

const App = () => {
  return (
    <div>
      <Getintouch />
      <Form />
      <ContactInfoCards />
      <Startegy />
       < TestimonialSection/>
   </div>
  )
}

export default App
