import React from 'react'

const AccesingEnvVariables = () => {
    const host = process.env.DB_HOST;
  console.log(host)
    return (
    <div> AccesingEnvVariables check console </div>
  )
}
export default AccesingEnvVariables