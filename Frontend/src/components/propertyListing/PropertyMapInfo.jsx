import React from 'react'
import MapComponent from './MapComponent'

const PropertyMapInfo = ({address}) => {
  return (
    <>
    <div className='map-image-container col-md-6 col-sm-12 col-12'>
      <h2 className="map-header">Where You'll be</h2>
      <MapComponent address={address}/>
    </div>
    <div className="extra-info col-md-6 col-sm-12 col-12">
      <h2 className="extra-heading">Extra Info</h2>
      <p className="extra-description">
        -Check-in time is 1pm & Check-out time is 10am.
        Early check-in or late check-out is permitted based on availability and prior intimation.
        "Based on availability, early check-in is permitted from 10am onwards. 
        If you wish to check-in before 10am, an early check-in fee will be applicable."
        Late check-out, is permitted based on availability and a fee may be applicable based on check-out time.
        Please contact host regarding the same.
        </p>
    </div>
    </>
  )
}

export default PropertyMapInfo
