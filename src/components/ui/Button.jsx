import React from 'react';


export default function Button({ children, variant = 'solid', className = '', ...props }) {
const base = 'inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
const styles = {
solid: 'bg-primary-600 text-white shadow-sm hover:bg-primary-700',
ghost: 'bg-transparent text-primary-700 hover:bg-primary-50',
outline: 'border border-primary-200 text-primary-700 hover:border-primary-300',
};
return (
<button className={`${base} ${styles[variant]} ${className}`} {...props}>
{children}
</button>
);
}