"use client"

import { Button } from "../ui/button"

const LoginButton = () => {
  return (
    <Button className="w-full bg-teal-500 hover:bg-teal-700 text-white py-6 text-base font-medium">
      <span>Sign in with Google</span>
    </Button>
  )
}

export default LoginButton
