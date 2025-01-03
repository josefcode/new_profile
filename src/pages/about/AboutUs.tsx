import React from "react";
import person from "/image_atef.png";

export default function AboutUs() {
  return (
    <>
      <div>
        <h1>Co-founder & CEO</h1>
        <h2>Nik Storonsky</h2>
        <p>
          With over 4 years of experience, this professional specializes in
          crafting dynamic, user-focused web and mobile interfaces. Proficient
          in modern front-end technologies such as JavaScript, TypeScript,
          React, Next.js, and styling tools like Sass, Less, and Styled
          Components, the work is centered on delivering responsive, accessible,
          and visually appealing applications.
        </p>
        <p>
          The approach to development is rooted in a structured methodology.
          Code is written with a focus on clarity, reusability, and performance,
          ensuring modular architecture and adherence to industry best
          practices. Each component is carefully crafted for maintainability,
          scalability, and seamless integration with APIs and back-end systems.
          Rigorous testing and debugging are integral to the process, resulting
          in high-quality, production-ready interfaces.
        </p>
        <p>
          The journey into front-end development is driven by a passion for
          transforming design concepts into engaging user experiences. Whether
          it’s optimizing performance, enhancing responsiveness, or implementing
          intuitive navigation, the priority is always on delivering exceptional
          digital experiences.
        </p>
        <p>
          Educationally grounded with a degree in Law from the University of
          Batna and a diploma in Full-Stack Development from Digital House, the
          background blends analytical thinking with creative execution. Outside
          of coding, interests include exploring design trends, experimenting
          with new UI techniques, and learning about emerging front-end
          technologies. The mission is clear: to create interfaces that leave a
          lasting impression and meet user needs flawlessly.
        </p>
      </div>
      <div>
        <img src={person} alt="" />
      </div>
    </>
  );
}
