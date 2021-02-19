import styled from 'styled-components';

export const Container = styled.article`
  background-color: var(--color-background-card);
  flex-direction: row;

  box-shadow: 0 4px 8px 0 var(--color-box-shadow);
  max-width: 90vw;
  margin: auto;
  text-align: center;

  border-radius: 5%;
  margin: 16px;
  padding:16px;

  width: 30vw;
  height: 50vh;

  &:hover{
    box-shadow: 0 8px 16px 0 var(--color-box-shadow);

  }

  &:first-child{
    background-color:red;
  }
`;

export const PostCardContainer = styled.div `
  width: 100%;
  height: 100%;
`

export const PostCardHeader = styled.header `
  margin-top: 0;
`

export const PostCardHeaderAvatar = styled.img `
  border-radius: 50%;
  flex-direction: row;
  width: 100px;
  height: 100px;

  align-content: flex-start;

`
export const PostCardHeaderAuthor = styled.h3 `

`

export const PostCardHeaderTitle = styled.h1 `

`

export const PostCardDescription = styled.main `

`

export const PostCardFooter = styled.footer `
  align-items: center;
  justify-content: center;
  border: solid red;

  position: unset;
  margin-bottom:0;
  bottom:0;

`

export const Button = styled.button `
  color: magenta;
  margin:8px;
  padding: 2px;
  outline: 0;
`

