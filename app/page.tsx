import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server'

import React from 'react'

const HomePage = async() => {
  const user = await currentUser();
  if (!user) {
     return <Guest />
    }
  return (
    <div className='text-red-500'>page</div>
  )
}

export default HomePage