import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';

type MyType = {
    id: number;
    title: string;
    author: string;
    publish_date: string;
    slug: string;
    description: string;
    content: string;
  }

export function FrontPage(props: {posts: MyType[]; setIdPost: (idPost: number) => any; setShowDetails: (showDetails: boolean) => any;}) {
  
const InfoButton = (id: number) => {
    props.setShowDetails(true);
    props.setIdPost(id);
};

return (
      <Container maxWidth="lg" style={{ paddingTop: 3 }}>
        <Typography variant="h4" style={{ fontWeight: 800, paddingBottom: 30 }}>
          Blog Posts
        </Typography>
        <Grid container spacing={3}>
            {props.posts.map((p) => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                    <Card style={{ maxWidth: "100%" }}>
                        <CardActionArea>
                        <CardMedia
                            title={p.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {p.description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: p.content}}>
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions style={{ display: "flex",  margin: "0 10px", justifyContent: "space-between" }}>
                        <Box style={{ display: "flex" }}>
                            <Box ml={2}>
                            <Typography variant="subtitle2" component="p">
                                {p.author}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                {p.publish_date}
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <InfoIcon onClick={() => InfoButton(p.id)}/>
                        </Box>
                        </CardActions>
                    </Card>
                    </Grid>
                );
            })}
        </Grid>
      </Container>
  );
}
