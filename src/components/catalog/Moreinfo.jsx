import React from 'react'
import Link from './Link'
const Moreinfo = () => {
    const getUrl = () => {
        return `https://www.stellantis.com/en`
    };
    return (
        <Link url={getUrl()} title={"Navigate to this link to know more!"} />
    );
};

export default Moreinfo