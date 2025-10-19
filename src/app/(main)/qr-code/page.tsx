import { redirect } from "next/navigation"

export default function QrCodePage() {
  const redirectUrl = "/links"

  return redirect(redirectUrl)
}