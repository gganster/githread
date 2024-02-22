import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DropDownMenuItemLogout } from "./DropDownMenuItemLogout";

export const UserProfile = async () => {
  const session = await getAuthSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          {session?.user.name ?? ""}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropDownMenuItemLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}