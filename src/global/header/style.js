import styled from 'styled-components';
import title from '../../constant/title.png'

export const HeaderDiv = styled.div`
    position: relative;
    height:64px;
    border-bottom: 2px solid #e3e3e3;
`

export const Title = styled.div`
width: 100px;
height:35px;
position:relative;
top: 5px;
left: 5px;
display: block;
padding-right: 5px;
background: url(${title});
background-size:contain;
overflow:hidden;
float:left;
`

export const MenuDiv = styled.div`
    position:relative;
    margin: 10px auto;
    height: 100%;
    width: 960px;
    left: 110px;
`
