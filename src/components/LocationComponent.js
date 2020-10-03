import React from 'react'

function Location() {
  return (
    <>

      <div className="shake">
        <img src="assets/images/church_state_inside.jpg" className="pimg1" />

        <div className="target ptext">
          <p className="font-weight-bold border">LOCATION
        </p>
        </div>
      </div>

      <section className="section section-light">
        <h2 className="font-weight-bold">
          CHURCH & STATE<br />
        370s 300E, Salt Lake City
        </h2>
        <br />

        <iframe className="img-fluid googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.6213917527327!2d-111.88343197235054!3d40.760617096530325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4065fd3bfee43643%3A0x7583d4d0933696cf!2sChurch%20%26%20State!5e0!3m2!1sen!2sus!4v1598231151984!5m2!1sen!2sus">
        </iframe>
      </section>
    </>
  )
}

export default Location
