import Styled from 'styled-components'
import Navigation from "./Navigation"


const Header = () => {
    return(
        <HeaderWrapper>
            <Navigation/>
        </HeaderWrapper>
    )
}


export default Header

const HeaderWrapper = Styled.div`
    width:100%;
    height:15vh;
    background: green;


`