import styled from "styled-components";
import Profiles from "../components/Profiles";

const MainArea = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4444;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ManageProfilesButton = styled.a`
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.3rem 1rem;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
`;

function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <MainArea>
      <Content>
        <Title>Who is watching ?</Title>
        <Profiles setActiveProfile={setActiveProfile} />
        <ManageProfilesButton href='#'>Manage Profiles</ManageProfilesButton>
      </Content>
      <ManageProfilesButton />
    </MainArea>
  );
}

export default Welcome;
