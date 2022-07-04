import React from 'react'
import { useRouter } from 'next/router'

function ClientIdPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjecthandler() {
    router.push({
      pathname: '/clients/[id]/[clientprojectid',
      query: { id: "bhums", clientprojectid: "project1" }
    })
  }

  return (
    <div>
      <h1>Hello Client!!!!! The project of clients given.</h1>
      <button onClick={loadProjecthandler}>Load a project</button>
    </div>
  )
}

export default ClientIdPage