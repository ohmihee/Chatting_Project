import Styled from 'styled-components'
import React from 'react'
import Header from './Header'
import Footer from './Footer'




const ThemeLayout = ({children}) => {
    return (
        <>
            <WebWrap>
                <Header/>
                    <WebInnerWrap>
                        <WebHeight>
                            {children}
                        </WebHeight>
                    </WebInnerWrap>
                <Footer/>            
            </WebWrap>

        </>
    )
}

export default ThemeLayout

const WebWrap = Styled.div`
    width : 100%;
    height: auto;
    overflow: hidden;
    /* background:#FAFAFA; */
`
    const WebInnerWrap = Styled.div`
    width : 90vw;
    height: auto;
    margin : 0 auto;
    /* background : #FAFAFA; */
    background: yellow;

`
const WebHeight = Styled.div`
    width: 100%;
    height: 100%;
    padding: 1vw;;
    box-sizing: border-box;
`

