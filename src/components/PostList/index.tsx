import React, { useEffect, useState } from 'react';
import {Container} from './styles';
import Post from '../Post';
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../../graphql/Post/ListPostsQuery'
import { Posts } from '../../utils/types'


const PostList: React.FC = ()  => {
  // search posts
  const [posts, setPosts] = useState<Posts[]>([])
  const { error, loading, data } = useQuery(GET_POSTS, { variables: {} })
  useEffect(() => { if (data) setPosts(data.listPosts) }, [data])
  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro inesperado: {error} ...</p>
  return (
    <Container>

        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}

    </Container>
  );
};

export default PostList;
