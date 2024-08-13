import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Avatar = styled.img`
  width: 200px;
  border-radius: 0.25rem;
`;
const Title = styled.p`
  color: #1c1c1c1c;
  text-align: center;
`;

const Card = styled.div`
  cursor: pointer;
  &:hover p {
    color: white;
  }
`;

function Profile(props) {
    const  {profile, setActiveProfile}  = props;
    
  const history = useHistory();

    const handleClick = () =>
    {
      setActiveProfile()
    history.push("/browse");
  };

  return (
    <Card onClick={handleClick}>
      <Avatar src={profile.avatar} />
      <Title>{profile.title}</Title>
    </Card>
  );
}

export default Profile;
