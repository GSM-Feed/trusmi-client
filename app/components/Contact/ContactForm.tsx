"use client";

import { ICommonComponentInterface } from "@/app/Interfaces/common.interface";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

interface IContactForm extends ICommonComponentInterface {}

const ContactForm: any = ({ className }: any) => {
  const [formData, setFormData]: any = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      ...formData,
    };

    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    }, (err: any) => {
      console.log('err', err);
      setLoading(false);
    });
  };

  return (
    <section
      className={`${className} max-w-[700px] w-full relative border-t border-t-borderC pt-10`}
    >
      <div className="text-center mb-10">
        <span className="badge badge-accent bg-[#E9FBFA] border-[#E9FBFA] text-primary px-4 py-3 capitalize text-xs font-medium">
          Leave a Message
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-2 basis-full sm:basis-1/2 sm:pr-3 pb-6">
            <label>YOUR NAME</label>
            <input
              type="text"
              required
              placeholder="Name Surname"
              className="input input-bordered border-borderC w-full outline-none shadow-none focus:outline-none focus:border-primary"
              onChange={(e: any) =>
                setFormData((oldData: any) => ({
                  ...oldData,
                  name: e.target.value,
                }))
              }
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-2 basis-full sm:basis-1/2 sm:pl-3 pb-6">
            <label>YOUR EMAIL ADDRESS</label>
            <input
              type="email"
              required
              placeholder="Email"
              className="input input-bordered border-borderC w-full outline-none shadow-none focus:outline-none focus:border-primary"
              onChange={(e: any) =>
                setFormData((oldData: any) => ({
                  ...oldData,
                  email: e.target.value,
                }))
              }
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2 basis-full sm:basis-1/2 sm:pr-3 pb-6">
            <label>SUBJECT</label>
            <input
              type="text"
              placeholder="Product"
              required
              className="input input-bordered border-borderC w-full outline-none shadow-none focus:outline-none focus:border-primary"
              onChange={(e: any) =>
                setFormData((oldData: any) => ({
                  ...oldData,
                  subject: e.target.value,
                }))
              }
              value={formData.subject}
            />
          </div>
          <div className="flex flex-col gap-2 basis-full sm:basis-1/2 sm:pl-3 pb-6">
            <label>YOUR PHONE NUMBER</label>
            <input
              type="text"
              required
              placeholder="Phone"
              className="input input-bordered border-borderC w-full outline-none shadow-none focus:outline-none focus:border-primary"
              onChange={(e: any) =>
                setFormData((oldData: any) => ({
                  ...oldData,
                  phone: e.target.value,
                }))
              }
              value={formData.phone}
            />
          </div>
          <div className="flex flex-col gap-2 basis-full pb-10">
            <label>HOW CAN WE HELP YOU?</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="input input-bordered border-borderC w-full outline-none shadow-none focus:outline-none focus:border-primary h-auto max-h-none py-3"
              onChange={(e: any) =>
                setFormData((oldData: any) => ({
                  ...oldData,
                  message: e.target.value,
                }))
              }
              value={formData.message}
            />
          </div>
          <div className="flex items-center justify-center basis-full pb-10">
            <button className="btn btn-outline btn-primary rounded-full min-w-32" disabled={loading}>
              {loading && <span className="animate-spin"><ImSpinner2 /></span>} Submit
            </button>
          </div>
          <p className="text-center content-text w-full text-sm">
            We&apos;ll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
