import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Pic from "../static/images/professional.jpg";
import Pic from "../static/images/Homeo.jpg";

const theme = createTheme({
  typography: {
    fontFamily: ["EB Garamond", "serif"].join(","),
  },
});

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={10}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={6} md={6} sm={12}>
            <Card elevation={0}>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Typography variant="h2" component="div">
                    Dr
                    <br />
                    Sherebanu
                    <br />
                    Milky
                    <br />
                    <p style={{ fontSize: "16px" }}>
                      B.H.M.S,
                      <br />
                      CCAH (Mum)
                    </p>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Card elevation={0}>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Typography variant="h5" component="div">
                    <img style={{ height: "180px" }} src={Pic} />
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={6} md={6} sm={6}>
            <Card elevation={0}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: "justify" }}
                >
                  Dr Sherebanu Milky is a Consulting Homeopath and Diet and
                  Nutrition Counsellor. Her journey as a homeopathic
                  practitioner started from the year 2002 when she completed her
                  Education from YMT medical college – Mumbai and graduated with
                  a BHMS degree (Bachelor of Homeopathic Medicine and Surgery).
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Home;
