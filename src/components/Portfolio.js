import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar";
import project1 from "../images/javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";


const useStyles = makeStyles({
   mainContainer: {
       background: "#233",
       height: "100%"
   }, 
   cardContainer: {
       maxWidth:345,
       margin: "5rem auto"
   }
});


const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
         <Grid container justify="center" alignItems="center">
             {/* Project1 */}
             <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 1"
                     height="140"
                     image={project1}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             PURCHASE SUMMARY WITH REDUX
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         A demonstration on how i created a purchase summary with React Redux and use of react Hooks for state manipulation
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                         <a href="https://ego-created-purchase.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                         <a href="https://github.com/egoheru/react-purchase-summary" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
                 
             </Card>
             </Grid>
              {/* Project2 */}
              <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 2"
                     height="140"
                     image={project2}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             REST API NODEJS EXPRESS MONGODB
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         How i created a Nodejs server API with Express server and MongoDB. will be creatiing a client site with React to enable cosumption. just an illustratiion                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                             <a href="https://mern-pro-ego.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                             <a href="https://github.com/egoheru/backend" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
                 
             </Card>
             </Grid>
              {/* Project3 */} 
              <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 3"
                     height="140"
                     image={project3}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             FOOD SEARCHING RECIPES
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         A walk demonstration how i use react hooks to set my state and created a Food Recipe Searching App where you can search and navigate between various Recipe.                         </Typography>
                     </CardContent> 
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                         <a href="https://ego-searching-recipe.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                         <a href="https://github.com/egoheru/food-searching-app" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
                 
             </Card>
             </Grid>
             {/* Project4 */}
             <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 4"
                     height="140"
                     image={project4}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             AUTHENTICATION SYSTEM
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         Here is an example on how i came up with Authentication for Login and Registration for protected users routing                           </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                         <a href="https://login-ego.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                         <a href="https://github.com/egoheru/react-login-system" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
             </Card>
             </Grid>
             {/* Project5 */}
             {/* <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 4"
                     height="140"
                     image={project4}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             MULTI-LEVEL-DROPDOWN MENU
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         A Created project of multi-level-dropdown menu ui in react js, responsive and mobile friendly, React js. interesting checkout.                         
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                         <a href="https://multi-ego-dropdown.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                         <a href="https://github.com/egoheru/229-multi-level-dropdown" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
             </Card>
             </Grid> */}
             {/* Project4 */}
             {/* <Grid item xs={12} sm={8} md={6}>
             <Card>
                 <CardActionArea>
                     <CardMedia
                     component="img"
                     alt="Project 4"
                     height="140"
                     image={project4}
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5">
                             RESPONSIVE FOOTER REACT
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         A Responsive web design footer approach to website that makes web pages renders well on a variety of devices and window or screen sizes.
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size="small" color="primary">
                         <a href="https://responsive-ego-footer.herokuapp.com/" target="_blank">Live Demo</a>
                         </Button>
                         <Button size="small" color="primary">
                         <a href="https://github.com/egoheru/react-footer-tutorial" target="_blank">Source Code</a>
                         </Button>
                     </CardActions>
             </Card>
             </Grid> */}
         </Grid>
        </Box>
    )
}

export default Portfolio
