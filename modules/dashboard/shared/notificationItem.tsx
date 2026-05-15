import {
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function NotificationItem() {
  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>5 mins ago</DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  )
}
