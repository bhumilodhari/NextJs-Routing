import React from 'react'
import Link from 'next/link'

function HomePage() {
    return (
        <>
            <h1>Hello Home!!!!!</h1>
            <div>
                <ul>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/clients">Client</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HomePage