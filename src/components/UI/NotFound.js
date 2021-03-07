import styled from "@emotion/styled";

const StyledGit = styled.div`
background-image: url(https://res.cloudinary.com/dzifwhokp/image/upload/v1615076060/gitbackground_ddz2xc.jpg);
display: flex;
width: 334px;
height: 209px;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 15px;
`;

const StyledSW = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
  & > p{
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
  }
`;

const StarWars = () =>(
  <StyledSW>
      <h1>404 Not Found</h1>
      <img src="https://res.cloudinary.com/dzifwhokp/image/upload/c_scale,w_244/v1615066021/not_found_mls2un.png" alt="Droids"/>
      <p>these aren't the droids<br/> you're looking</p>
  </StyledSW>
)

const GitHubNF = () =>(
  <StyledGit>
    <img src="https://res.cloudinary.com/dzifwhokp/image/upload/c_scale,w_135/v1615068187/404_nf_lkvkok.png" alt="404_not_found"/>
    <img src="https://res.cloudinary.com/dzifwhokp/image/upload/c_scale,w_125/v1615068187/gh_jedi_fyojkv.png" alt="Octo_Jedi"/>
  </StyledGit>
)

function NotFound() {
  const not_found = [<GitHubNF/>,<StarWars/>]
  const random = Math.floor(Math.random() * not_found.length);
  return not_found[random];
}

export default NotFound;