import React from 'react'
import ContactForm from './ContactForm'
import AddressInfo from './AddressInfo'

export default function ThirdSection() {
  return (
    <section>
      <h2 className="visually-hidden">Contact Us</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12">
            <ContactForm />
          </div>
          <div className="col-lg-6 col-12">
            <AddressInfo />
          </div>
        </div>
      </div>
    </section>
  )
}

