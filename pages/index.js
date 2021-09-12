import UserInfo from "../modules/user-info";
import { Container } from "../styles/styles";
import UiProvider from "../context/ui-context";

export default function Home() {
  return (
    <UiProvider>
      <Container>
        <UserInfo />
      </Container>
    </UiProvider>
)
}

