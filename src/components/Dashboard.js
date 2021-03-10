import React, {useContext, useEffect} from 'react'
import AppContext from "./AppContext";
import StoryCard from "./StoryCard";
import StoryCardSkeleton from "./StoryCardSkeleton"

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

export default function Dashboard({searchResults, setSearchResults, searchTerm}){
   
    const appData=useContext(AppContext);
    
    useEffect(() => {
       
        const results = appData&&appData.filter(story =>
            story.item.headline[0].toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
       
      }, [searchTerm]);
    return(
        <Container style={{marginTop:"70px"}}>
            <Grid container spacing={3} >
                {!appData||!searchResults?[1,2,3,4,5,6,7,8,9].map(story=>{
                    return( <Grid item xs={12} sm={6} md={4}> <StoryCardSkeleton /> </Grid>)
                }):searchResults&&searchResults.map(story=>{
                    return( <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}> <StoryCard story={story} key={story.id} prefav={localStorage.getItem(story.id)}/> </Grid>)
                })}
            </Grid>
        </Container>
    )
}