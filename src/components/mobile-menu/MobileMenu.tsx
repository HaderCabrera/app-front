"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useAuthenticator } from '@aws-amplify/ui-react';



const navItems = [
    { href: "#features", label: "Features" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#integrations", label: "Integrations" },
    { href: "#security", label: "Security" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
]

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false)
    }

    const router = useRouter();

    const { authStatus } = useAuthenticator(context => [context.authStatus]);
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
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-lg font-bold">Menu</span>
                        {/* <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setOpen(false)}>
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close menu</span>
                        </Button> */}
                    </div>
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium px-3 py-2 rounded-md hover:bg-muted"
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

