



import CakeView  from "@/app/features/cake/CakeView"
import UserView from './features/users/UserView'
import ReactHookForm from "./react hook form/React-Hook-Form"

export default function Home() {
  return (
    <main className= "flex flex-col items-center justify-between p-24 ">
    <CakeView/>
    <UserView/>
    <ReactHookForm/>
    </main>
  )
}
