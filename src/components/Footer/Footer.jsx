import React, { useState } from 'react';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core';
const Footer = ({}) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="e-shop" height="25px" className={classes.image} /> E-Records
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography to="/" variant="h6" className={classes.title} color="inherit">
                    Community
                </Typography>
                <div className={classes.ul}>
                    <Link href="#" className={classes.li}>
                        GitHub
                    </Link>
                    <Link href="#" className={classes.li}>
                        Twitter
                    </Link>
                    <Link href="#" className={classes.li}>
                        GitHub
                    </Link>
                    <Link href="#" className={classes.li}>
                        StackOverflow
                    </Link>
                    <Link href="#" className={classes.li}>
                        Team
                    </Link>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Typography to="/" variant="h6" className={classes.title} color="inherit">
                    Resources
                </Typography>
                <div className={classes.ul}>
                    <Link href="#" className={classes.li}>
                        Support
                    </Link>
                    <Link href="#" className={classes.li}>
                        Blog
                    </Link>
                    <Link href="#" className={classes.li}>
                        Icons
                    </Link>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Typography to="/" variant="h6" className={classes.title} color="inherit">
                    Company
                </Typography>
                <div className={classes.ul}>
                    <Link href="#" className={classes.li}>
                        About
                    </Link>
                    <Link href="#" className={classes.li}>
                        Contact Us
                    </Link>
                    <Link href="#" className={classes.li}>
                        Careers
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.copyright}>Currently v0.1.0. Released under the MIT License. Copyright © 2021 E-Records.</Grid>
        </Grid>
      </div>
    );
  };
  
  export default Footer;