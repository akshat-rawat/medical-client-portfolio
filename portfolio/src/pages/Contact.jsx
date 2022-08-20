import Map from "../components/Map";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

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
              <CardContent>
                <div style={{ paddingLeft: "50px" }}>
                  <p
                    className="para"
                    style={{ fontSize: "2rem", textAlign: "left" }}
                  >
                    Address:
                  </p>
                  Benaka plaza, Basement No.70/1, Nobel residency road, Central Excise House Building Co-operative Society, Doddakammanahalli Begur, Uttarahalli Hobli, Bengaluru
                  <br />
                  <br />
                  <p
                    className="para"
                    style={{ fontSize: "2rem", textAlign: "left" }}
                  >
                    E-Mail:
                  </p>
                  drsmilki@gmail.com <br />
                  <br />
                  <p
                    className="para"
                    style={{ fontSize: "2rem", textAlign: "left" }}
                  >
                    Phone:
                  </p>
                  +91-9880493843
                </div>
              </CardContent>
            </Grid>
            <Grid item lg={8}>
              <Map style={{ widht: "20px" }} />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Contact;
