

import { UserCircleIcon, UserMinusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

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
            className="font-medium rounded-lg text-sm px-1 py-1 text-center md:mx-2"
            onClick={signOutSignIn}
        >
            {authStatus === "authenticated" ? <UserMinusIcon className="h-6 w-6 m-1" /> : authStatus === "unauthenticated" ? <UserCircleIcon className="h-8 w-8"/> : <QuestionMarkCircleIcon className="h-8 w-8" />}
        </button>
    );
}
export default UserIconToggle