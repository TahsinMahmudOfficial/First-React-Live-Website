import React, { useState } from "react";
import FormItems from "./FormItems";

const Contact = () => {

    const [data, setData] = useState({
      fullName:"",
      phone:"",
      email:"",
      msg:"",
    });


    const formSubmit = (ev) =>{
      ev.preventDefault();

      alert(`Your Name is "${data.fullName}"; Your Mobile Number is "${data.phone}"; Your Email is "${data.email}"`)


      setData({
        fullName:"",
        phone:"",
        email:"",
        msg:"",
      })
    };


    const InputEvent = (ev) => {
        const {name, value} = ev.target

        setData((prevVal) =>{
          return{
            ...prevVal,
            [name]: value,
          }
        })
    };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contant Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

        <form action="" onSubmit={formSubmit}>
           <FormItems 
             type='text'
             labelname="Your Name"
             name="fullName"
             value={data.fullName}
             ChangeEvent = {InputEvent}
           />

           <FormItems 
             type='number'
             labelname="Mobile Number"
             name="phone"
             value={data.phone}
             ChangeEvent = {InputEvent}
           />

           <FormItems 
             type='email'
             labelname="Email Address"
             name="email"
             value={data.email}
             ChangeEvent = {InputEvent}
           />

           {/* <FormItems 
             type='password'
             name="Enter Your Password"
           /> */}


            <div className="form-floating mb-3" >
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "7rem" }}
                name="msg"
                value={data.msg}
                onChange = {InputEvent}
              ></textarea>
              <label for="floatingTextarea2">Message</label>
            </div>

            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
