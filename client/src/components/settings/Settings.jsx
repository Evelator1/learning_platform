import { Container } from "react-bootstrap"
import ProfileSettings from "./ProfileSettings"
import AccountSettings from "./AccountSettings"

export default function Settings() {
  return (
    <Container>
       <ProfileSettings/>
       <AccountSettings/>
        
    </Container>
  )
}
