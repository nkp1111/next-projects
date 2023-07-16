import React from 'react'
import ContactForm from './ContactForm'
import AddressInfo from './AddressInfo'
import styles from "@/app/utils.module.css"
export default function ThirdSection() {
  return (
    <section className={styles.third_section}>
      <h2 className="visually-hidden">Contact Us</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-12 p-5 border border-1">
            <ContactForm />
          </div>
          <div className="col-lg-6 col-12 pt-5 px-0 border border-1 border-start-0">
            <AddressInfo />
          </div>
        </div>
      </div>
    </section>
  )
}

