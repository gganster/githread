import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <Alert className="my-8">
        <AlertTriangle />
        <AlertTitle>404 Not found</AlertTitle>
        <AlertDescription>
          The post you are looking for does not exist.
        </AlertDescription>
        <Link className={buttonVariants({variant: "link"})} href="/">Go home</Link>
      </Alert>
    </div>
  )
}
