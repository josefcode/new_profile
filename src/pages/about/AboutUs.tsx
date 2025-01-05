import React from "react";
import person from "/image_atef.png";
import "./AboutUs.scss";
export default function AboutUs() {
  return (

      <div className="about-root">
        <div>
          <h2 className="position">Front-End developer</h2>
          <h2 className="name">atef chelaghma</h2>
          <p className="des">
            With over 6 years of experience, this professional specializes in
            crafting dynamic, user-focused web and mobile interfaces. Proficient
            in modern front-end technologies such as JavaScript, TypeScript,
            React, Next.js, and styling tools like Sass, Less, and Styled
            Components, the work is centered on delivering responsive,
            accessible, and visually appealing applications.
          </p>
          <p className="des">
            The approach to development is rooted in a structured methodology.
            Code is written with a focus on clarity, reusability, and
            performance, ensuring modular architecture and adherence to industry
            best practices. Each component is carefully crafted for
            maintainability, scalability, and seamless integration with APIs and
            back-end systems. Rigorous testing and debugging are integral to the
            process, resulting in high-quality, production-ready interfaces.
          </p>
          <p className="des">
            The journey into front-end development is driven by a passion for
            transforming design concepts into engaging user experiences. Whether
            it’s optimizing performance, enhancing responsiveness, or
            implementing intuitive navigation, the priority is always on
            delivering exceptional digital experiences.
          </p>
          <p className="des">
            Educationally grounded with a degree in Law from the University of
            Batna and a diploma in Full-Stack Development from Digital House,
            the background blends analytical thinking with creative execution.
            Outside of coding, interests include exploring design trends,
            experimenting with new UI techniques, and learning about emerging
            front-end technologies. The mission is clear: to create interfaces
            that leave a lasting impression and meet user needs flawlessly.
          </p>
        </div>
        <div className="about-image">
          <img src={person} alt="" className="about-person-image" />
        </div>
      </div>

  );
}
