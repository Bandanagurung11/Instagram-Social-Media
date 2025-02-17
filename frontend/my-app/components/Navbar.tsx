import React from 'react'
import { Heart, MessageCircleMore } from 'lucide-react';
// import { Button } from './ui/button';
import { RegisterDialog } from './RegisterDialog';
import { FeedCreation } from './FeedCreation';

export default function Navbar({heading} ) {
  
  return (
    <div className=' flex items-center justify-between'>
  <p>{heading}</p>
      <div className='flex items-center gap-4'>
        {/* <Button size="sm">Register</Button> */}
        <FeedCreation/>
        <RegisterDialog/>
      <Heart />
      <MessageCircleMore />
      </div>
    </div>
  )
}
