import Map from "../components/Map";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./Contact.css";

const theme = createTheme({
  typography: {
    fontFamily: ["EB Garamond", "serif"].join(","),
  },
});

const Contact = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="contact">
          <Grid container p={2}>
            <Grid item lg={4}>
              <card>
                <CardContent>
                  <div style={{ paddingLeft: "50px" }}>
                    <p
                      className="para"
                      style={{ fontSize: "2rem", textAlign: "left" }}
                    >
                      Address:{" "}
                    </p>
                    406, Bohra Colony, <br />
                    Bohra Layout, Gottigere, <br />
                    Bengaluru, Karnataka 560083
                    <br />
                    <br />
                    <p
                      className="para"
                      style={{ fontSize: "2rem", textAlign: "left" }}
                    >
                      E-Mail:{" "}
                    </p>
                    drsmilki@gmail.com <br />
                    <br />
                    <p
                      className="para"
                      style={{ fontSize: "2rem", textAlign: "left" }}
                    >
                      Phone:{" "}
                    </p>
                    +91-1234567890
                  </div>
                </CardContent>
              </card>
            </Grid>
            <Grid item lg={8}>
              <card>
                <Map style={{ widht: "20px" }} />
              </card>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Contact;
