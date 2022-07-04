import React from 'react'
import { useRouter } from 'next/router'

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    // Send req to backend server
    // to fetch the data of the router.query.projectid like id.

  return (
    <div>
        <h1>The Portfolio Project Page!</h1>
    </div>
  )
}

export default PortfolioProjectPage