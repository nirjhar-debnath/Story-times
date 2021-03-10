import React, { useContext } from "react";

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
      maxWidth: 345,
      margin: theme.spacing(2),
    },
    media: {
      height: 190,
    },
  }));

export default function StoryCardSkeleton(){
    
 
    const classes = useStyles();

  
    return (
     <Card className={classes.card}>

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>

      <Skeleton animation="wave" variant="rect" className={classes.media} />
      
      <CardHeader
        avatar={
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        title={
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
        }
        subheader={'5 hours ago'}
      />
      
      
    </Card>
    );
}