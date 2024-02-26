"use client";
import React, {useState, PropsWithChildren} from 'react'
import { UserProfile } from '@/src/feature/query/user.query'
import { Button } from '@/components/ui/button';

export const Profile = ({
  user
} : PropsWithChildren<{
  user: UserProfile
}>
) => {

  console.log(user);
  return (
    <div>
      <h1 className="text-2xl font-bold">{user.username}</h1>
      <h3>ff //TODO</h3>
    </div>
  )
}
