import ContactForm from '@/components/contactForm';
import getMyProfile from '@/lib/getMyProfile';
import { PersonalInfoParams } from '@/types';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react'

export default async function Contact() {
  const profile: PersonalInfoParams = await getMyProfile();
  const { email, phone, location } = profile;

  // Server action for handling contact message
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const userEmail = formData.get("email");
    const message = formData.get("message");
    console.log("Contact form submission:", { name, userEmail, message });
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          Get in Touch
        </h1>
        <p className="mt-3 text-base text-base-content/70">
          Interested in working together or discussing potential opportunities? Feel free to reach out.
        </p>
      </div>

      {/* Direct Contact Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
        <div className="p-4 rounded-2xl bg-base-100 border border-base-200 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <EnvelopeIcon className="w-5 h-5" />
          </div>
          <div className="overflow-hidden">
            <div className="text-xs text-base-content/50 font-medium">Email Me</div>
            <a href={`mailto:${email}`} className="text-xs sm:text-sm font-semibold text-base-content hover:text-primary transition-colors truncate block">
              {email}
            </a>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-base-100 border border-base-200 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <PhoneIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-base-content/50 font-medium">Call Directly</div>
            <a href={`tel:${phone}`} className="text-xs sm:text-sm font-semibold text-base-content hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-base-100 border border-base-200 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <MapPinIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-base-content/50 font-medium">Location</div>
            <div className="text-xs sm:text-sm font-semibold text-base-content">
              {location}
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <ContactForm handleSubmit={handleSubmit} />

    </main>
  );
}
