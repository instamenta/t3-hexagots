import { SignUp } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Page() {
  return (
    <>
      <Navbar />
      <SignUp />
    </>
  );
}
