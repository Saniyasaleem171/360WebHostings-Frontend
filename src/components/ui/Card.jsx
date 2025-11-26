import React from 'react';


export default function Card({ title, text, children, className = '' }) {
return (
<div className={`p-6 bg-white rounded-2xl shadow-sm ${className}`}>
{title && <div className="text-lg font-semibold">{title}</div>}
{text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
{children}
</div>
);
}