"use client";

import React, { useState } from 'react'
import { PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ContactForm({
  handleSubmit,
}: {
  handleSubmit: (formData: FormData) => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await handleSubmit(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="card w-full max-w-xl mx-auto bg-base-100 border border-success/30 shadow-md p-8 text-center rounded-2xl">
        <CheckCircleIcon className="w-12 h-12 text-success mx-auto mb-3" />
        <h3 className="text-xl font-bold text-base-content">Message Sent!</h3>
        <p className="text-sm text-base-content/70 mt-1">
          Thank you for reaching out. I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="card w-full max-w-xl shadow-md bg-base-100 border border-base-200 mx-auto rounded-2xl overflow-hidden">
      <form onSubmit={onSubmit} className="p-6 sm:p-8 space-y-4">
        
        {/* Name */}
        <div className="form-control">
          <label className="label py-1">
            <span className="text-xs font-semibold text-base-content/80">Your Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="input input-bordered input-sm sm:input-md rounded-xl bg-base-200/40 focus:bg-base-100"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label py-1">
            <span className="text-xs font-semibold text-base-content/80">Your Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            className="input input-bordered input-sm sm:input-md rounded-xl bg-base-200/40 focus:bg-base-100"
            required
          />
        </div>

        {/* Message */}
        <div className="form-control">
          <label className="label py-1">
            <span className="text-xs font-semibold text-base-content/80">Message</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Let's talk about opportunities or collaborations..."
            className="textarea textarea-bordered rounded-xl bg-base-200/40 focus:bg-base-100 text-sm"
            required
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full rounded-xl font-semibold gap-2 shadow-sm"
          >
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <>
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
