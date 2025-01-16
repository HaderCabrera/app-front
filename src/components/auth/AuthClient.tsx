"use client"

import {Authenticator} from '@aws-amplify/ui-react'


const  AuthClient = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Authenticator />
    </div>
  );
}
export default AuthClient;