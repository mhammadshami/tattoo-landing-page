import React from "react";
// import contact data
import { contactData } from "../data";
// import motion
import { motion } from "framer-motion";
// import fade in
import { fadeIn } from "../variants";

const Contact = () => {
  // destructure contact data
  const { title, form, info } = contactData;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            {/* title */}
            <h2>{title}</h2>
            {/* info items */}
            <div>
              {info.map((item, index) => {
                // destructure item
                const { link, phone, address, email, subtitle, title } = item;

                return (
                  <div key={index} >
                    {/* title */}
                    <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                    {/* subtitle */}
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">{subtitle}</div>
                    {/* address, phone & email */}
                    <div>
                      {/* address */}
                      <div>
                        {" "}
                        <div>{address.icon}</div>
                        <div>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div>
                        {" "}
                        <div>{phone.icon}</div>
                        <div>{phone.number}</div>
                      </div>
                      {/* email */}
                      <div>
                        {" "}
                        <div>{email.icon}</div>
                        <div>{email.address}</div>
                      </div>
                      {/* link */}
                      <a href="">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
