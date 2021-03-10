import React, { useState, useContext, useEffect } from "react";
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    card: {
      width: 345,
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
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
              <ShareIcon />
            </IconButton>
        }
        title={
          story.story["author-name"]
        }
        subheader={moment(story.story["updated-at"]).format('MMMM Do YYYY')}
      />
  
    </Card>
    );
}