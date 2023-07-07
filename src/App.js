import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Typography from "@material-ui/core/Typography";
import useStyles from "./theme";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";

const api = {
  key: "db539cd1ca0d38601c2b60ce72447c19",
  base: "http://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Button variant="outlined" disabled>
          More Apps
        </Button>

        <Card className={classes.cardbar}>
          <Button
            className={classes.buttonbar}
            component="a"
            href="https://portfolio-nadeem-khan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
          >
            Portfolio App
          </Button>
          <Button
            className={classes.buttonbar}
            component="a"
            href="https://main--musical-tartufo-ee981a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
          >
            AI Summarizer
          </Button>
          <Button
            className={classes.buttonbar}
            component="a"
            href="https://main--melodic-sunburst-49c2f1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
          >
            Admin Panel
          </Button>

          <Typography className={`${classes.typobar} ${classes.footer}`}>
            This demo app is devleoped by "Nadeem Khan" in the guidance of "Mr.
            Rutul Panchal"
          </Typography>
        </Card>
      </Drawer>
      <main
        className={`${classes.content} ${open ? classes.contentShift : ""}`}
      >
        {/* =====================MAIN CONTENT============================= */}
        <Button
          variant="contained"
          color="primary"
          className={classes.sidebarButton}
          onClick={handleDrawerOpen}
        >
          Open More
        </Button>
        <Container>
          <AppBar position="static" className={classes.appbar}>
            <Typography variant="h5" align="center">
              Weather App
            </Typography>
          </AppBar>
          <Box className={classes.box1}>
            <TextField
              variant="outlined"
              label="City Name"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Box>
          {typeof weather.main !== "undefined" ? (
            <Card className={classes.maincard}>
              <CardContent>
                <Typography variant="h4" align="center">
                  {weather.name}
                </Typography>
                <Grid
                  className={classes.gcontainer}
                  container
                  spacing={2}
                  alignItems="center"
                  align="center"
                  marginTop="50px"
                >
                  <Grid item xs={12} md={4}>
                    <Typography variant="h5" component="div">
                      Temperature
                    </Typography>

                    <Typography
                      variant="h6"
                      component="div"
                      color="textSecondary"
                    >
                      {weather.main.temp}°C
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="h5" component="div">
                      Feels Like
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      color="textSecondary"
                    >
                      {weather.main.feels_like}°C
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="h5" component="div">
                      Description
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      color="textSecondary"
                    >
                      {weather.weather[0].description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ) : (
            ""
          )}
        </Container>
      </main>
    </div>
  );
};

export default App;
