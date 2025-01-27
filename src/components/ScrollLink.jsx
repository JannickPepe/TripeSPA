'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


function ScrollLink({ id, children, className }) {

const handleClick = (e) => {

e.preventDefault();

const element = document.getElementById(id);

if (element) {

element.scrollIntoView({ behavior: 'smooth' });

}

};
return (

<Link href={`#${id}`} passHref>

<div onClick={handleClick} className={className}>{children}</div>

</Link>

);

}

export default ScrollLink;