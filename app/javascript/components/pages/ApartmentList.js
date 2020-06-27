import React from 'react'
import { ListGroup } from 'reactstrap'

const ApartmentList = (props) => {
const { apartments } = props
  return(
    apartments.map((apartment, index) => {
      return(
        <ListGroup key={ index }>
          <h4>{ apartment.image }</h4>
          <h4>{ apartment.address }</h4>
          <h4>{ apartment.city }, { apartment.state }  { apartment.zip_code }, { apartment.country }</h4>
          <h4>Bedrooms: { apartment.bedrooms }</h4>
          <h4>Bathrooms: { apartment.bathrooms }</h4>
          <h4>Monthly Rent: { apartment.monthly_rent }</h4>
          <h4>Manager: { apartment.manager_id }</h4>
        </ListGroup>
        )
    })
  )
}
export default ApartmentList
