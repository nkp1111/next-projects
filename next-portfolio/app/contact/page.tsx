import ContactForm from '@/components/contactForm';
import getMyProfile from '@/lib/getMyProfile';
import { PersonalInfoParams } from '@/types';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react'

export default async function Contact() {
  const profile: PersonalInfoParams = await getMyProfile();
  let email;
  let phone;
  if (profile) {
    email = profile.email;
    phone = profile.phone;
  }

  // server action for handling db method
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);
    // TODO: save contact info in db for viewing later
  }

  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-4xl font-bold sm:mt-8 mt-4 w-full text-center">Contact Me</h1>
      <div className='mt-6 sm:w-3/4 lg:w-1/2 w-full mx-auto flex flex-col gap-5'>
        {(email || phone) && (
          <div className={`flex ${email && phone ? "justify-between" : "justify-center"} sm:flex-row flex-col gap-3`}>
            <div className='btn normal-case '>
              <EnvelopeIcon className='w-6 h-6 text-info' />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            {phone && (
              <div className='btn normal-case '>
                <PhoneIcon className='w-6 h-6 text-success' />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            )}
          </div>
        )}

        <ContactForm handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}
