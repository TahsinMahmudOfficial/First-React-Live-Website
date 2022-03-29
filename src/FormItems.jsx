import React from 'react'

const FormItems = (props) => {
  return (
    <>
        <div className="form-floating mb-3">
              <input
                type={props.type}
                className="form-control"
                id="floatingInput"
                placeholder="Enter Your Name"
                autoComplete='off'
                name={props.name}
                value={props.value}
                onChange={props.ChangeEvent}
              />
              <label for="floatingInput">{props.labelname}</label>
            </div>

    </>
  )
}

export default FormItems