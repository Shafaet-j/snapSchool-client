import React from 'react'

const Row = ({singleClass}) => {
    console.log(singleClass)
    const {available_seat,instructor_email,instructor_name,name,price,status} = singleClass
  return (
    <tr>
        <th>{name}</th>
        <th>{instructor_name}</th>
        <th>{instructor_email}</th>
        <td>{available_seat}</td>
        <td>{price}</td>
        <td>{status}</td>
      </tr>
  )
}

export default Row