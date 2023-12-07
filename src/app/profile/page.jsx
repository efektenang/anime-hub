import { authUserSession } from '@/libs/auth-libs';
import React from 'react'

export default async function Profile() {
    const user = await authUserSession();
  return (
    <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.image}</p>
    </div>
  )
}
