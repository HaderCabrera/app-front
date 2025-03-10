
import { CircleUserRound, UserCog, UserX } from "lucide-react";

import {Hub} from "aws-amplify/utils";
import { signOut } from "aws-amplify/auth";
import { useAuthenticator } from '@aws-amplify/ui-react';

import React, { useEffect, useState } from "react";

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
            {authStatus === "authenticated" ? <UserX className="h-6 w-6" /> : authStatus === "unauthenticated" ? <CircleUserRound className="h-6 w-6"/> : <UserCog className="h-6 w-6" />}
        </button>
    );
}
export default UserIconToggle