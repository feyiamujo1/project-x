import { Navigate } from "react-router-dom"


const RedirectPage = () => {

  return (
    <div className="h-screen z-30">
        <Navigate to='/' />
    </div>
  )
}

export default RedirectPage