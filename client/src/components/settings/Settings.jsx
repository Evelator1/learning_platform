import { Container } from "react-bootstrap"
import ProfileSettings from "./ProfileSettings"
import AccountSettings from "./AccountSettings"

export default function Settings() {
  return (
    <Container style={{overflow:"scroll"}}>
       <ProfileSettings/>
       {/* <AccountSettings/> */}
        
    </Container>
  )
}
