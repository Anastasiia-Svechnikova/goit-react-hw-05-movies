import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
    setQuery(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            toast.warning('Enter your query please!');
            return;
        }
        onSubmit(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name='film' value={query} placeholder="Enter your query here, please" onChange={handleInputChange}>
            </input>
            <button type="submit">Search</button>
        </form>
    )
}