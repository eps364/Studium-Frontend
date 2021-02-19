import React from 'react';
import { Posts } from '../../utils/types';
import {Button, Container,PostCardContainer, PostCardHeader, PostCardHeaderAvatar, PostCardHeaderTitle, PostCardHeaderAuthor, PostCardDescription, PostCardFooter} from './styles'

type Props = {
  post: Posts;
};

const handleLike = () => {
  alert('Gostei');
};
const handleImprove = () => {
  alert('Melhorar');
};
const handleDenounce = () => {
  alert('Denunciar');
};
const handleRead = () => {
  alert('Ler');
};
const handleEdit = () => {
  alert('Editar');
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <PostCardContainer>
          <PostCardHeader>
            <PostCardHeaderAvatar src={post?.image_url } />
            <PostCardHeaderTitle> {post.title} </PostCardHeaderTitle>
            <PostCardHeaderAuthor>Publicado por: {post.author ? post.author : 'Anonimo'}</PostCardHeaderAuthor>
          </PostCardHeader>

          <PostCardDescription>{post.body}</PostCardDescription>

          <PostCardFooter>
            <Button data-toggle="tooltip" title="Gostei"
              onClick={handleLike}>
              <span role="img" aria-labelledby="like"> 🎁 </span>
            </Button>

            <Button data-toggle="tooltip" title="Precisa melhorar"
              onClick={handleImprove}>
              <span role="img" aria-labelledby="like">{' '}🥺</span>
            </Button>

            <Button data-toggle="tooltip" title="Denunciar"
              onClick={handleDenounce}>
              <span role="img" aria-labelledby="like">🕵️‍♂️</span>
            </Button>

            <Button data-toggle="tooltip" title="Ler na integra"
              onClick={handleRead}>
              <span role="img" aria-labelledby="like">🔎</span>
            </Button>

            <Button data-toggle="tooltip" title="Editar"
              onClick={handleEdit}>
              <span role="img" aria-labelledby="like">✍</span>
            </Button>

          </PostCardFooter>
        </PostCardContainer>
      </Container>
  );
};

export default Post;
