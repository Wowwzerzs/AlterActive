"use client"
import React from 'react';
import Footer from "../components/Footer";
import { MegaMenuDefault } from "../components/Navbar";

function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <MegaMenuDefault />

      <section className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-24 pt-32">
        <div className="bg-white p-8 rounded-md shadow-lg transform transition-all duration-500 w-full max-w-5xl mx-4 md:mx-auto">
          <div className="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
            <h1 className="mb-10 text-3xl font-extrabold text-gray-900 md:leading-tight">
              Welcome to Alter Active
            </h1>
            <p className="mb-10 text-lg text-gray-800">
              At Alter Active, we believe that fitness is not just about physical exercise; it's a lifestyle. Our mission is to empower individuals to embrace a healthier lifestyle through fitness, nutrition, and mental well-being.
            </p>
            <div className="mx-auto mb-3 shadow-lg avatar">
              {/* <img src="/placeholder.jpg" alt="Photo of Praveen Juge" /> */}
            </div>
            <p className="text-lg font-bold text-gray-900">Who We Are</p>
            <p className="mb-6 text-base text-gray-800">
              Alter Active is more than just a gym; we're a community of like-minded individuals dedicated to personal growth and transformation. Whether you're a seasoned athlete or just starting your fitness journey, we welcome you with open arms.
            </p>
            <p className="text-lg font-bold text-gray-900">Our Mission</p>
            <p className="mb-6 text-base text-gray-800">
              Our mission at Alter Active is to inspire and empower individuals to live their best lives through fitness and wellness. We strive to create a supportive and inclusive environment where everyone feels motivated and encouraged to reach their goals.
            </p>
            <p className="text-lg font-bold text-gray-900">Our Vision</p>
            <p className="mb-6 text-base text-gray-800">
              We envision a world where everyone prioritizes their health and well-being, and we're committed to making that vision a reality. Through our innovative programs and personalized approach, we aim to transform lives and make a positive impact on the world.
            </p>
            <p className="text-lg font-bold text-gray-900">Embrace Change, Embrace Fitness</p>
            <p className="text-base font-medium text-gray-900">
              Join us at Alter Active and embark on a journey of self-discovery, growth, and transformation.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default About;
