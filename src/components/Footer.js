import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer p-10 bg-base-200 text-base-content px-16'>
      <div>
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-restaurante-x-template_dovlrz.svg'
          alt='resturante x'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className='footer-title'>Services</span>
        <Link className='link link-hover'>Branding</Link>
        <Link className='link link-hover'>Design</Link>
        <Link className='link link-hover'>Marketing</Link>
        <Link className='link link-hover'>Advertisement</Link>
      </div>
      <div>
        <span className='footer-title'>Utility</span>
        <Link className='link link-hover'>About us</Link>
        <Link className='link link-hover'>Contact</Link>
        <Link className='link link-hover'>Jobs</Link>
        <Link className='link link-hover'>Press kit</Link>
      </div>
      <div>
        <span className='footer-title'>Follow Us</span>
        <Link className='link link-hover flex gap-4 text-3xl'>
          <span>
            <BsFacebook />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
          <span>
            <BsYoutube />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
