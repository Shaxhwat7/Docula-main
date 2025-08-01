'use client'

import { ChevronLeft } from "lucide-react"

const Navigation = () => {
    return(
        <>
            <aside
                className="group h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]"
            >
                <div
                    className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
                >
                    <ChevronLeft className="h-6 w-6"/>
                </div>
                <div>
                    <p>Action Items</p>
                </div>
                <div className="mt-4">
                    <p>Documents</p>
                </div>
                <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"/>
            </aside>
        </>
    )
}

export {Navigation} 