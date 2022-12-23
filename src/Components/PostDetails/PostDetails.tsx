import React, { useEffect, useState } from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';

type MyType = {
    id: number;
    title: string;
    author: string;
    publish_date: string;
    slug: string;
    description: string;
    content: string;
  }

type typeComments = {
    id: number;
    postId: number;
    parent_id: number;
    user: string;
    date: string;
    content: string;
}

export function PostDetails(props: {posts: MyType[]; idPost: number; setShowDetails: (showDetails: boolean) => any;}) {
  
    const [post, setPost] = useState<MyType>();
    const [comments, setComments] = useState<typeComments[]>([]);

    useEffect(() => {
        setPost(
            props.posts.find(p => {return p.id === props.idPost})
        );
      },[props.posts, props.idPost]);
      
    useEffect(() => {
        fetch('http://localhost:9000/posts/' + props.idPost + '/comments')
          .then((response) => response.json())
          .then((data) => {
            setComments(data.sort((a: any, b: any) => a.date > b.date ? -1 : 1));
          });
    },[props.idPost]);

return (
    <>
        {post && <Container maxWidth="lg" style={{ paddingTop: 3 }}>
        <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: 30 }}>
            {post.title}
        </Typography>
        </Container>
        }
    </>
  );
}
