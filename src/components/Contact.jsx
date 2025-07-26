import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a64e445-0fe7-41b9-bb05-639f27a9cfa8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submit Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <motion.div 
      initial={{ opacity: 0, x: -200}}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contactus'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact<span className="underline underline-offset-4 decoration-1 font-light">With Us</span></h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to make a Move ? Lets Buil your future Together</p>

     <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'> 
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                <u><b>Your Name</b></u>
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'type="text" name='Name' 
                placeholder='Enter your name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                <u><b>Your Email</b></u>
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'type="Email" name='Email'
                 placeholder='Enter your Email' required/>
            </div>
            
        </div>
        <div classname="my-6 text-left">
           <u><b>message</b></u>
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='message' placeholder='Message' required></textarea>
           
        </div>
        <button className='bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition duration-300'>{result ? result : "submit"}</button>
        <p className='text-gray-200 mt-4'>We will get back to you within 24 hours</p>
     </form>


</motion.div>
  )
}

export default Contact
