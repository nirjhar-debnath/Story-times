import React from 'react';
import HideOnScroll from './HideOnScroll'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopBar({theme, setTheme, searchTerm, setSearchTerm, showFav, setShowFav}) {
  const classes = useStyles();

  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon /> 
  // Icons imported from `@material-ui/icons`

  return (
    <div className={classes.root}>
      <HideOnScroll>
      <AppBar position="fixed" >
        <Toolbar>
         
          <Typography className={classes.title} variant="h6" noWrap>
            Story Times
          </Typography>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </div>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setShowFav(!showFav)}
          >
          {!showFav?<FavoriteIcon />:<FavoriteIcon color="error"/>}
          </IconButton>
          
          
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </div>
  );
}
