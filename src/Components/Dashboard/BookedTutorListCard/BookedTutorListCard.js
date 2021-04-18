
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
// import { useHistory } from 'react-router';

const BookedTutorListCard = (props) => {
  // const history = useHistory()


  const { name, email, price, subject, status, tutor, _id, paymentMethod } = props.bookingInfo

  // const statusUpdate={ newStatus:'approve'}

  const [statusUpdate, setStatusUpdate] = useState({})

  const handleStatusChange = (e) => {
    const newStatusUpdate = { ...statusUpdate }

    newStatusUpdate[e.target.name] = e.target.value

    setStatusUpdate(newStatusUpdate)

  }
  console.log(statusUpdate)

  const updateStatus = (id) => {
    alert('Updated')

    console.log('updating')

    fetch(`https://glacial-refuge-82912.herokuapp.com/bookingTutorData/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(statusUpdate)
    })
      .then(res => res.json())
      .then(data => {
        console.log('updated', data)


      })


  }

  return (
    <div>
      <table class="table ">

        <tbody >
          <tr >

            <td>
              <div style={{ width: '80px' }}>
                {name}
              </div>
            </td>

            <td>
              <div style={{ width: '150px' }}>
                {email}
              </div>
            </td>

            <td>
              <div style={{ width: '70px' }} className="text-center ms-5">
                {price}
              </div>
            </td>

            <td>
              <div style={{ width: '70px' }} className="">
                {paymentMethod}
              </div>
            </td>

            <td>
              <div style={{ width: '80px' }}>
                {subject}
              </div>
            </td>

            <td>
              <div style={{ width: '80px' }}>
                {tutor}
              </div>
            </td>

            <td>
              <div style={{ width: '80px' }}>
                {status}
              </div>
            </td>


            <td >
              <select className="rounded-pill p-1 border-danger" name="status" id="" onChange={handleStatusChange}>
                <option > {status}</option>
                <option>Approved</option>
                <option >On Going</option>
                <option >Done</option>
                <option>Canceled</option>
              </select>
            </td>

            <td>
              <button class="btn btn-danger" onClick={() => updateStatus(_id)}><FontAwesomeIcon icon={faCheck} /></button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookedTutorListCard;