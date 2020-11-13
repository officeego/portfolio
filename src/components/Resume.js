import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"


const useStyles = makeStyles(theme=>({
   mainContainer: {
       background: "#233",
    // background: "#200122"
   },
   timeLine: {
       position: "relative",
       padding: "1rem",
       margin: "0 auto",
       "&:before": {
         content: "''",
         position: "absolute",
         height: "100%",
         border: "1px solid tan",
         right: "40px",
         top: 0
       },
       "&:after": {
           content: "''",
           display: "table",
           clear: "both"
       },
       [theme.breakpoints.up("md")]: {
           padding: "2rem",
           "&:before": {
               left: "calc(50% - 1px)",
               right: "auto"
           }
       }
   },
        timeLineItem:{
          padding: "1rem",
          borderBotton:"2px solid tan",
          position: "relative",
          margin: "1rem 3rem 1rem 1rem",
          border: "5px dotted green",
          clear: "both",
          "&:after": {
              content: "''",
              position: "absolute"
          },
          "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right:"auto",
                left: ".0625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
      },
   timeLineYear: {
       textAlign: "center",
       maxWidth: "9.375rem",
       margin: "0 3rem 0 auto",
       fontSize: "1.8rem",
       background: "green",
       borderRadius: "50px",
       color: "white",
       border: "5px solid pink",
       boxShadow: "5px 5px 5px green",
       lineHeight: 1,
       padding: "0.5rem 0 1rem",
       "&:before": {
           display: "none"
       },
       [theme.breakpoints.up("md")]: {
           textAlign: "center",
           margin: "0 auto",
           "&:nth-of-type(2n)": {
               float: "none",
               margin: "0 auto"
           },
           "&:nth-of-type(2n):before": {
             display:"none"
        }
       }
   },
   heading: {
       color: "blue",
       boxShadow: "10px 10px 10px green",
       padding: "3rem 0",
       textTransform: "uppercase"
   },
   subHeading:{
       color: "white",
       padding: "0",
       textTransform: "uppercase"
   }
}));
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
               <Box component="div" className={classes.timeLine}> 
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                 2016
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}> 
                         web design
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}> 
                         ROYAL MOTION LTD | STRIX
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}> 
                    Consulted with Product Manager to identify minimal viable product and decomposed feature set into small scoped user stories  
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                 2016
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}> 
                      PROJECT COORDINATOR 
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}> 
                        REAL-STATE
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}> 
                      Managing leading team of intense coordination with manfacturing plant in my local erea, Built a mock customer service web app for a Scholar project.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                 2017
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}> 
                        JAVASCRIPT FULL STACK
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}> 
                       EAGLE TAG
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}> 
                    Oversaw design and upgrades development, enable testing methods of prototypes to be used in development. Built modern applications with the MERN 
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                 2017
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}> 
                         react | redux
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}> 
                       PARA-TECH
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}> 
                    Ensured the uninterrupted flow of business-critical operations. On-time error analysis reduced downtime by 15% and costs of warranty by up to 25%
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem} `}>
                 2018-2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}> 
                         mern stack
                    </Typography>
                    <Typography variant="body1" align="center" style={{color: "tomato"}}> 
                         TECH EGO
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: "tan"}}> 
                    Intergreted support system .Greater understandng of existing architecture and works on minor bugs, use of API Request between the client and the server
                    </Typography>
                </Box>
               </Box>
               <Typography variant="body1" align="center" style={{color: "tomato"}}> 
               {/* <Link to= "downloadcomp/downloadme.jpg" target="_blank" download>Download Resume</Link> */}
              </Typography>
           </Box>
        </>
    )
}

export default Resume
