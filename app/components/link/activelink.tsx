"use client"

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ActiveLinkProps {
  to: string;
  label: string;
}

const activelink: React.FC<ActiveLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded ${
        isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </Link>
  );
};

export default activelink;
