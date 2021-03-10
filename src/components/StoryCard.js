import React, { useState, useContext, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    card: {
      width: 345,
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    media: {
      height: 190,
    },
  }));

export default function StoryCard({story}){
    
    //console.log(story.story["author-name"])
    const classes = useStyles();

    const [fav, setFav] = useState(localStorage.getItem(story.id))

    const handleFavClick=()=>{
      !fav?localStorage.setItem(story.id,1):localStorage.removeItem(story.id)
      setFav(!fav)
    }
  
    return (
     <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleFavClick}>
            {!fav?<FavoriteIcon />:<FavoriteIcon color="error"/>}
          </IconButton>
        }
        title={story.item.headline}
        subheader={story.story.subheadline}
      />
       
        <CardHeader
        avatar={
            <Avatar
              alt="Ted talk"
              src={story.story.authors[0]["avatar-url"]}
            />
        }
        action={
            <IconButton aria-label="settings">
              <ExpandMoreIcon />
               
            </IconButton>
        }
        title={
          story.story["author-name"]
        }
        subheader={'5 hours ago'}
      />
      

       
    </Card>
    );
}