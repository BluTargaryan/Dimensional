import {createGlobalStyle} from 'styled-components';

import NetflixSansMedium from './fonts/NetflixSansMedium.ttf'
import NetflixSansBold from './fonts/NetflixSansBold.ttf'
import NetflixSansRegular from './fonts/NetflixSansRegular.ttf'

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'NetflixSansMedium';
    src: local('NetflixSansMedium'), url(${NetflixSansMedium}) format('truetype');
    font-weight:normal ;
  }

  @font-face {
    font-family: 'NetflixSansBold';
    src: local('NetflixSansBold'), url(${NetflixSansBold}) format('truetype');
    font-weight:normal ;
  }

  @font-face {
    font-family: 'NetflixSansRegular';
    src: local('NetflixSansRegular'), url(${NetflixSansRegular}) format('truetype');
    font-weight:normal ;
  }

  body{
    width:100%;
    font-family: 'NetflixSansRegular', sans-serif;
    background:grey;
    color:#ffffff ;
    overflow-x:hidden ;
}

nav{
    font-family: 'NetflixSansRegular', sans-serif;
}
button{
    font-family: 'NetflixSansRegular', sans-serif;
}
input{
    font-family: 'NetflixSansRegular', sans-serif;
    color:white;
    &::placeholder{
      font-family: 'NetflixSansRegular', sans-serif;
    }
    &:focus{
      outline:none;
    }
}
`

export default GlobalStyles;