import React from 'react'

export default async function SlugPage({params}) {
    const p = await params
    console.log(p)
  return (
    <div>
        {/* <h2>slugs: {p}</h2><br /> */}
      SlugPage
    </div>
  )
}
