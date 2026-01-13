"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconLogout2,
    IconBrandTabler,
    IconBook,
    IconUserBolt,
    IconUsers,
    IconClipboardText,
    IconAlphabetKorean,
    IconSchool,
    IconShoppingBag,
    IconCurrencyKroneCzech,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export const Logo = () => (
    <a
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
    >
        <IconCurrencyKroneCzech
            size={24}
            stroke={2}
            className="text-black dark:text-white"
        />
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium whitespace-pre"
        >
            Simple<span className="text-red-500">Korean</span>
        </motion.span>
    </a>
);

export const LogoIcon = () => (
    <a href="#" className="relative z-20 flex items-center py-1 text-sm font-normal text-black dark:text-white">
        <IconCurrencyKroneCzech
            size={24}
            stroke={2}
            className="text-black dark:text-white"
        />
    </a>
);

export default function SidebarComponent() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            label: "Dashboard",
            href: "/dashboard/main",
            icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Courses",
            href: "/dashboard/course",
            icon: <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Books",
            href: "/dashboard/book",
            icon: <IconBook className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Exams",
            href: "#",
            icon: <IconClipboardText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Lessons",
            href: "#",
            icon: <IconSchool className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Members",
            href: "#",
            icon: <IconUsers className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Orders",
            href: "#",
            icon: <IconShoppingBag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Languages",
            href: "#",
            icon: <IconAlphabetKorean className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
        {
            label: "Logout",
            href: "/",
            icon: <IconLogout2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
        },
    ];

    return (
        <Sidebar open={open} setOpen={setOpen} animate={true}>
            <SidebarBody className="justify-between">
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    {open ? <Logo /> : <LogoIcon />}
                    <div className="mt-8 flex flex-col gap-2">
                        {menuItems.map((item, idx) => (
                            <SidebarLink key={idx} link={item} />
                        ))}
                    </div>
                </div>

                <div>
                    <hr className="bg-black dark:bg-white my-4" />
                    <SidebarLink
                        link={{
                            label: "Administrator",
                            href: "#",
                            icon: (
                                <img
                                    src="https://assets.aceternity.com/manu.png"
                                    className="h-7 w-7 shrink-0 rounded-full"
                                    width={50}
                                    height={50}
                                    alt="Avatar"
                                />
                            ),
                        }}
                    />
                </div>
            </SidebarBody>
        </Sidebar>
    );
}