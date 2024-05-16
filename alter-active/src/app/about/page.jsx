import React from 'react';

function About() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
        <h1 className="mb-10 text-2xl font-extrabold text-purple-900 md:leading-tight md:text-3xl">
          Welcome to Alter Active
        </h1>
        <p className="mb-10 text-lg text-gray-700">
          At Alter Active, we believe that fitness is not just about physical exercise; it's a lifestyle. Our mission is to empower individuals to embrace a healthier lifestyle through fitness, nutrition, and mental well-being.
        </p>
        <div className="mx-auto mb-3 shadow-lg avatar">
          {/* <img src="/placeholder.jpg" alt="Photo of Praveen Juge" /> */}
        </div>
        <p className="text-base font-bold text-purple-900">Who We Are</p>
        <p className="mb-6 text-sm text-gray-700">
          Alter Active is more than just a gym; we're a community of like-minded individuals dedicated to personal growth and transformation. Whether you're a seasoned athlete or just starting your fitness journey, we welcome you with open arms.
        </p>
        <p className="text-base font-bold text-purple-900">Our Mission</p>
        <p className="mb-6 text-sm text-gray-700">
          Our mission at Alter Active is to inspire and empower individuals to live their best lives through fitness and wellness. We strive to create a supportive and inclusive environment where everyone feels motivated and encouraged to reach their goals.
        </p>
        <p className="text-base font-bold text-purple-900">Our Vision</p>
        <p className="mb-6 text-sm text-gray-700">
          We envision a world where everyone prioritizes their health and well-being, and we're committed to making that vision a reality. Through our innovative programs and personalized approach, we aim to transform lives and make a positive impact on the world.
        </p>
        <p className="text-base font-bold text-purple-900">Embrace Change, Embrace Fitness</p>
        <p className="text-sm font-medium text-purple-900">Join us at Alter Active and embark on a journey of self-discovery, growth, and transformation.</p>
      </div>
    </section>
  );
}

export default About;
