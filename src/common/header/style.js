import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
height:56px;
border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({ href: '/' })
`
    position:absolute;    
    height:56px;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div `
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`;
export const NavItem = styled.div `
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div `
    float:left;
    position:relative;
    .iconfont{
        position:absolute;
        bottom:5px;
        border-radius:15px;
        line-height:30px;
        width:30px;
        right:5px;   
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})
`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    &::placeholder{
        color:#777;
    }
    &.focused{
        width:260px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div `
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149
    }
`