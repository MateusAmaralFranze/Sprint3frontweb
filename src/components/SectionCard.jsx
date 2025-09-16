import React from 'react'

export default function SectionCard({title, children}) {
return (
    <article className="border border-slate-300 p-4 rounded-md bg-white shadow-sm">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="text-sm text-slate-600">{children}</div>
    </article>
)
}
