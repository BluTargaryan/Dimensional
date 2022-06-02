import { motion } from "framer-motion";
import styled from "styled-components";

//route
import { Link } from "react-router-dom";

import search from '../img/search.svg'

const Nav = () => {
return(
    <StyledNav>
        <Logo>Dimensional</Logo>
        <ul>
            <Link id="home" to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <li>Home</li>
            </Link>
           
            <Link id="tv" to="/home2" style={{ textDecoration: 'none', color: 'white' }}>
            <li>tv shows</li>
            </Link>
            
            <li>movies</li>
        </ul>
        <Form>
<img src={search} alt="search logo" />
        <input type="text" placeholder="SEARCH"/>
        </Form>

    </StyledNav>
)
}

const StyledNav = styled(motion.nav)`
width: 1100px;
background:transparent ;
position:absolute ;
z-index:1;
left: 50%;
transform: translateX(-50%);
margin-top:30px ;
display:flex ;
justify-content:space-between ;
align-items:center ;





ul{
    list-style:none ;
    width: 250px;
    display: flex;
    justify-content:space-between ;
    text-transform:uppercase ;
    font-size:15px ;

    li{
        cursor: pointer;
    }
}
`

const Logo = styled(motion.div)`
height:100% ;
font-size: 20px;
text-transform:uppercase ;
font-weight:bold ;
font-family: 'NetflixSansMedium', sans-serif;
cursor: pointer;
`

const Form = styled(motion.div)`
display:flex ;


img{
    width:20px ;
    margin-right:10px ;
    cursor: pointer;
}
input{
    height: 25px;
    background:#000000 ;
    border:none ;
    border-radius:4px ;
    padding-left: 10px;
    opacity: .6;
}

`
export default Nav;