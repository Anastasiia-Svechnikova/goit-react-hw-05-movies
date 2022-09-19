import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled('div')`
display: flex;
gap: 30px;

`
export const Thumb = styled('div')`
width: 30%;

`
export const Poster = styled('img')`
width: 100%;
`
export const Description = styled('div')`
width: 70%;
`
export const GenresItem = styled('li')`
padding: 4px;
font-size: 13px;
color: white;
background-color: #952f2f;
border-radius: 2px;
`
export const MovieNav = styled('ul')`
display: flex;
gap:50px;
padding:20px 0;
margin: 0;

list-style: none;

`
export const NavWrapper = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

font-size: 15px;
border-bottom: 1px solid black;
border-top: 1px solid black;
background-color: #fff;

`
export const MovieLink = styled(Link)`
font-size: 20px;
color: #952f2f;
text-decoration: none;

`
export const BackLink = styled(Link)`
padding: 7px;
display: block;
font-size: 14px;
color: #952f2f;
text-decoration: none;

`
export const GenresList = styled('ul')`
list-style: none;
display: inline-flex;
gap: 10px;
`
export const GenresTitle = styled('h3')`

display: inline;
`

