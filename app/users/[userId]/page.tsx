import { getAuthSession } from '@/lib/auth'
import React from 'react'
import { getUserProfile } from '@/src/feature/query/user.query'
import { notFound } from 'next/navigation';
import { Profile } from './Profile';

export default async function UserPage({params}: {params: {userId: string}}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) return notFound();

  return (
    <div className="mt-4">
      <Profile user={user} />
    </div>
  )
}
