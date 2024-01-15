import React from 'react'
import useFormContext from '../context/useFormContext'
const SendEmail = () => {
  const { data, handleChange } = useFormContext()

  const content = (
    <>
        <label className="form-label" htmlFor="optInNews">
            <input type="checkbox" id="sendEmail" name="sendEmail" checked={data.sendEmail} onChange={handleChange} />
            Receive our newsletter
        </label>
        <ul className="flex-col">
            <small>Receive Discounts Mail</small><br/>
            <small>Find Out About New Products</small>
        </ul>
    </>
)

return content
}



export default SendEmail