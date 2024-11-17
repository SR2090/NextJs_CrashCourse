import Form from "next/form"
import React from 'react'
import SearchFormReset from './SearchFormReset'
const SearchForm = (): React.JSX.Element => {
    const query = "Test"

    return (
        <Form action="/" scroll={false} className='search-form'>
            <input name="query" defaultValue={query} className='search-input' placeholder='Search Startups' />
            <div className='flex gap-2'>
                {query && <SearchFormReset />}
                {<button type="submit" className="search-btn text-white" >
                    S
                </button>}
            </div>

        </Form>
    )
}

export default SearchForm