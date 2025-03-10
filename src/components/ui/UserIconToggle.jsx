
import { FaUserCircle, FaUserClock, FaUserMinus } from "react-icons/fa";

import { Hub } from "aws-amplify/utils";
import { signOut } from "aws-amplify/auth";
import { useAuthenticator } from '@aws-amplify/ui-react';

import React, { useEffect } from "react";

import { useRouter } from 'next/navigation';

function UserIconToggle() {

    const { authStatus } = useAuthenticator(context => [context.authStatus]);
    const router = useRouter();

    useEffect(() => {
        const hubListenerCancel = Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signedIn":
                    router.push("/");
                    break;
                case "signedOut":
                    router.push("/");
                    break;
            }
        });
        return () => hubListenerCancel();
    }, [router]);

    const signOutSignIn = async () => {
        if (authStatus === "authenticated") {
            await signOut();
        } else {
            router.push("/signin");
        }
    }

    return (
        <button
            type="button"
            className={``}
            onClick={signOutSignIn}
        >
            {authStatus === "authenticated" ? <FaUserMinus className="h-5 w-5 md:h-6 md:w-6 " /> : authStatus === "unauthenticated" ? <FaUserCircle className="h-5 w-5 md:h-6 md:w-6 " /> : <FaUserClock className="h-5 w-5 md:h-6 md:w-6 " />}
        </button>
    );
}
export default UserIconToggle