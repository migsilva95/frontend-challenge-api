import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';

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
    const [newComment, setNewComment] = useState<boolean>(false);
    const [addNewUser, setAddNewUser] = useState<string>('');
    const [addNewComment, setAddNewComment] = useState<string>('');
    const [editing, setEditing] = useState<number>(0);
    const [editComment, setEditComment] = useState<string>('');
    const [addedComment, setAddedComment] = useState<typeComments>();

    useEffect(() => {
        setPost(
            props.posts.find(p => {return p.id === props.idPost})
        );
        fetch('http://localhost:9000/posts/' + props.idPost + '/comments')
          .then((response) => response.json())
          .then((data) => {
            setComments(data.sort((a: any, b: any) => a.date > b.date ? -1 : 1));
          });
      },[props.posts, props.idPost]);

    const onBack = () => {
      props.setShowDetails(false);
    };

    const addComment = () => {
      const newComment = {
        "postId": props.idPost, 
        "parent_id": null, 
        "user": addNewUser, 
        "date": new Date().toLocaleString().substring(0, 10), 
        "content": addNewComment
      };
      fetch('http://localhost:9000/posts/' + props.idPost + '/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
      .then((response) => response.json())
      .then((data) => {
        let helperArray = comments;
        helperArray.push(data);
        setComments(helperArray);
        setNewComment(false);
      });
    };

    const changeComment = (comment: typeComments) => {
      setEditing(0);
      const updateComment = {
        "id": comment.id,
        "postId": comment.postId, 
        "parent_id": comment.parent_id, 
        "user": comment.user, 
        "date": new Date().toLocaleString().substring(0, 10), 
        "content": editComment
      };
      fetch('http://localhost:9000/comments/' + comment.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateComment)
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
      const helperArray = comments.map(c => {
        if (c.id === comment.id) {
          return updateComment;
        }
        return c;
      });
      setComments(helperArray);
    };

  return (
    <>
      {post && 
        <div>
          <Container maxWidth="lg" style={{ paddingTop: 3 }}>
            <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: 30, textAlign: 'center' }}>
                {post.title}
            </Typography>
            <Button variant="outlined" onClick={() => onBack()}>Back</Button>
            <br />
            <br />
            <Typography gutterBottom variant="h5" component="h2">
              {post.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: post.content}}>
            </Typography>
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                  {post.author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                  {post.publish_date}
              </Typography>
            </Box>
          </Container>
          <br />
          <br />
          <Container maxWidth="lg" style={{ paddingTop: 3 }}>
            <Typography gutterBottom variant="h4" component="h2">
              Comments
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {comments.map(c => {
                return (
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={c.user}
                      secondary={
                        <React.Fragment>
                          
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {c.date + " — "}
                            </Typography>
                            {editing !== c.id ?
                            <>
                              {c.content}
                              <EditIcon onClick={() => {
                                setEditing(c.id);
                                setEditComment(c.content);
                                }}></EditIcon>
                            </>
                            :
                            <>
                              <TextField id="outlined-basic" label="Comment" value={editComment} variant="outlined" onChange={(event) => setEditComment(event.target.value)}/>
                              <Button variant="contained" onClick={() => changeComment(c)}>Save</Button>
                            </>
                            }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                )
              })}
            </List>
            {newComment ?
              <div>
                <TextField id="outlined-basic" label="User" variant="outlined" onChange={(event) => setAddNewUser(event.target.value)}/>
                <TextField id="outlined-basic" label="Comment" variant="outlined" onChange={(event) => setAddNewComment(event.target.value)}/>
                <br />
                <Button variant="contained" onClick={() => addComment()}>Add Comment</Button>
                <Button variant="outlined" onClick={() => setNewComment(false)}>Cancel</Button>
              </div>
              :
              <Button variant="contained" onClick={() => setNewComment(true)}>New Comment</Button>
            }
          </Container>
        </div>
      }
    </>
  );
}
