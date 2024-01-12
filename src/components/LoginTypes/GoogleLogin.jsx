import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";

export default function GoogleLoginFunction() {
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
            console.log('credentialResponse', credentialResponse);
            // const credentialResponseDecode = jwt_decode(credentialResponse.credential);
            // console.log('credentialResponseDecode', credentialResponseDecode);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
      />
    </div>
  )
}
