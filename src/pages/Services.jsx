import React from "react";
import "../assets/css/Footercomp.css";

const Services = () => {
  const servicesData = [
    {
      title: "Technical Support",
      description: "24/7 reliable support to resolve issues quickly and keep your systems running smoothly with minimal downtime."
    },
    {
      title: "Partnership & Collaboration",
      description: "Strategic technology partnerships to design, build, and scale customized solutions that drive your business forward."
    },
    {
      title: "Training & Development",
      description: "Comprehensive training programs and workshops to upskill teams and individuals in cutting-edge technologies."
    },
    {
      title: "Platform Integration",
      description: "Seamless integration of Knowall's technology into your existing workflows for enhanced efficiency and scalability."
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Our <span className="highlight">Services</span></h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;