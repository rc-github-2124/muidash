import React from "react";
import Grid from "@mui/material/Grid2";
import mainbg from "../../assets/mainbg.png";
import {
  Box,
  Button,
  Container,
  Input,
  Typography,
  TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import Checkbox from "../../assets/checkbox.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <Container
      sx={{
        background: "white",
        height: "100%",
        width: "100%",
        borderRadius: "16px",
        position: "relative",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ lg: 6, xs: 12, sm: 12 }}>
          <Box
            sx={{
              position: "relative",
              left: "10px",
              top: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "56px",
                letterSpacing: "-0.02em",
                color: "#2B3674",
              }}
            >
              Sign in
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
              }}
            >
              Enter your email and password to sign in!
            </Typography>
            <Button
              sx={{
                width: "100%",
                background: "#F4F7FE",
                borderRadius: "16px",
                position: "relative",
                top: "40px",
                height: "50px",
                right: "14px",
              }}
            >
              <GoogleIcon
                sx={{
                  position: "relative",
                  right: "10px",
                }}
              />
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                  textTransform: "none",
                }}
              >
                Sign in with Google
              </Typography>{" "}
            </Button>
            <Box
              sx={{
                position: "relative",
                top: "50px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "23px",
                  position: "relative",
                  top: "20px",
                  width: "100%",
                }}
              >
                <TextField
                  sx={{
                    width: "80%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray",
                        borderRadius: "16px", // Default border color
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "-0.02em",
                      color: "#A3AED0", // Label color
                    },
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  sx={{
                    width: "80%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray",
                        borderRadius: "16px", // Default border color
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "-0.02em",
                      color: "#A3AED0", // Label color
                    },
                  }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "18px",
                        height: "18px",
                      }}
                      component="img"
                      src={Checkbox}
                    ></Box>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "-0.02em",
                        color: "#2B3674",
                      }}
                    >
                      Keep me Logged in
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "-0.02em",
                      color: "#4318FF",
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Box>
                <Box sx={{
                  width:'100%',
                  display:'flex',
                  justifyContent:'center',
                  position:'relative',
                  left:'15px'
                }}>
                  <NavLink style={{
                    width:'100%'
                  }} to='/overview'>

          
                <Button
                  sx={{
                    background: "#4318FF",
                    borderRadius: "16px",
                    width: "90%",
                    height: "54px",
                    
                  }}
                >
                  <Typography sx={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "100%",
                      textAlign: "center",
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                      textTransform:'none'
                  }}>Sign in</Typography>
                </Button>
                </NavLink>
                </Box>
               
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ lg: 6, xs: 12, sm: 12 }}>
          <Box
            component="img"
            src={mainbg}
            sx={{
              width: "100%",
              position: "relative",
              top: { lg: "22px", xs: "100px", sm: "100px" },

              borderRadius: "16px",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
