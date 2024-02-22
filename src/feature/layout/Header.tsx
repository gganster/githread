import React from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/src/theme/ThemeToggle'
import { LoginButton } from '../auth/LoginButton'
import { UserProfile } from '../auth/UserProfile'
import { getAuthSession } from '@/lib/auth'

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        {session?.user ? <UserProfile /> : <LoginButton />}
        <ThemeToggle />
      </div>
    </header>
  )
}
