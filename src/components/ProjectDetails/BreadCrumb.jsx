import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import projects from '../../data/projects.js';

const Breadcrumb = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const projectTitle = projects[id - 1]?.title || 'Project Details'; // Get the project title

  return (
    <nav className="flex items-center font-Poppins p-4 lg:p-6 lg:pl-10 bg-gray rounded-xl lg:rounded-xl text-xs lg:text-sm shadow-lg transition-shadow duration-500 hover:shadow-2xl">
      <Link to="/" className="text-accent hover:underline flex items-center hover:text-accent2 transition-colors duration-500">
        <FaHome className="mr-1" /> Home
      </Link>
      <span className="mx-2">/</span>
      <span className="text-accent2 font-semibold">{projectTitle}</span>
    </nav>
  );
};

export default Breadcrumb;
