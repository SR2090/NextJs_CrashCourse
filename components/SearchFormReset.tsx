// Convert this button into client component rest will be build on server.
'use client'
import React from 'react'
import Link from 'next/link'
import { X } from "lucide-react"
const SearchFormReset = (): React.JSX.Element => {
    const reset = () => {
        const formCollection = document?.getElementsByClassName('search-form') as HTMLCollection;
        const form = formCollection[0] as HTMLFormElement | undefined;
        if (form) {
            form.reset();
        }
    }
    return (
        // Using link here to reset the url
        <>{(<button type="reset" onClick={reset}>
            <Link href="/" className="search-btn text-white" ><X className='size-5' /></Link>
        </button>)}</>
    )
}

export default SearchFormReset