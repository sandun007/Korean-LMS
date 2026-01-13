import React from 'react'
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout.jsx";

function Main() {
    return (
        <>
            <DashboardLayout>
                <div className="p-6 md:p-10">
                    <h1 className="text-3xl font-bold mb-8">
                        Welcome to Dashboard
                    </h1>
                </div>
            </DashboardLayout>
        </>
    )
}

export default Main;

 