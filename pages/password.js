import { Container } from "../styles/styles";
import UserPassword from "../modules/user-password";
import UiProvider from "../context/ui-context";

export default function Password() {
  return (
    <UiProvider>
      <Container>
        <UserPassword />
      </Container>
    </UiProvider>
  )
}