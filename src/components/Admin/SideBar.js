import React, {useState} from 'react'
import logo from "../../assets/images/logo.svg";
 import Home from "../../assets/images/home-solid.svg";
 import Team from "../../assets/images/social.svg";
 import Calender from "../../assets/images/sceduled.svg";
 import Projects from "../../assets/images/starred.svg";
 import Documents from "../../assets/images/draft.svg";
 import PowerOff from "../../assets/images/power-off-solid.svg";
 import styled from 'styled-components'
 import {Link} from 'react-router-dom';
 


const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

 const Button = styled.button`
  background-color: var(--examinator);
  color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
background-color: var(--examinator);
width: 3.5rem;
height: 80vh;
margin-top: 1rem;
border-radius: 0 30px 30px 0;
padding: 1rem 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

position: relative;
`;
const Logo = styled.div`
  width: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;
const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--examinator);

  padding: 2rem 0;

  position: absolute;
  top: 3rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;
const Item = styled.li`
  
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;


const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;
const Profile = styled.div`

  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  z-index:100;
  height: 3rem;

  padding: 0.5rem 1rem;
  border: 2px solid var(--white);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--examinator);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;
const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  
  justify-content: space-between;
  align-items: center;

  h4 {
    display: inline-block;
	margin-right:5px;
  }

  // Link {
  //   font-size: 0.8rem;
  //   text-decoration: none;
  //   color: var(--grey);

  //   &:hover {
  //     text-decoration: underline;
  //   }
  }
`;



const SideBar = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  return (
	<Container>
	<Button clicked={click} onClick={() => handleClick()} >Click</Button>
	<SidebarContainer>
		<Logo>
			<img src={logo} alt="logo" />
		</Logo>
		<SlickBar clicked={click} >
			<Item >
        <Link to='/admin-dashboard/' ><img src={Home} alt="" /></Link>
				
				<Text clicked={click} >Home</Text >
			</Item>

      <Item >

      <Link to="/admin-dashboard/add-user/"><img src={Team} alt="" /></Link>
      <Text clicked={click} >Add </Text >

      </Item>

      
			
			<Item >
      <Link to="/admin-dashboard/plan-exam"><img src={Calender} alt="" /></Link>
			<Text clicked={click} >Plan</Text >
			</Item>
			<Item>
      <Link to="/admin-dashboard/teachers"><img src={Projects} alt="" /></Link>

			<Text clicked={click} >Teachers</Text >
			</Item>

      <Item>
      <Link to="/admin-dashboard/students"><img src={Projects} alt="" /></Link>

			<Text clicked={click} >Students</Text >
			</Item>


			<Item >
      <Link to="/admin-dashboard/planned-exam"><img src={Documents} alt="" /></Link>

      
			<Text clicked={click} >Planned</Text >
			</Item>
      
		</SlickBar>
		<Profile clicked={profileClick}>
			<img onClick={()=> handleProfileClick()} src="https://pbs.twimg.com/profile_images/1193203438265491459/aooDOvxd_400x400.jpg" alt="profile" />
		
		    <Details clicked={profileClick}>
			  <Name>
				<h4>Salah</h4>
        <Link style={{ textDecoration: 'none', color: 'white' , fontSize: '12px', fontWeight:'normal', marginLeft:'5px'}}  to='/admin-dashboard/profile'>Profile</Link>
				{/* <a href="/#"> View Profile</a> */}
			  </Name>

			  <Logout>
				<img onClick={handleLogout} className='pic' src={PowerOff} alt="logout" />
			  </Logout>
		    </Details>
		</Profile>



	</SidebarContainer>
		
	</Container>
  )
}

export default SideBar