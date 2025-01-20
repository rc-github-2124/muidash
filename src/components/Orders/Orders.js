import { Button, Grid2, Typography } from "@mui/material";
import React from "react";
import OrderTable from "./OrderTable";
import { Box } from "@mui/material";
import chart7 from "../../assets/chart7.png";
import supporticon from "../../assets/supporticon.png";
import fingerprint from "../../assets/fingerprint.png";
const Orders = () => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={{ lg: 6, sm: 12 }}>
          <Box
            sx={{
              width: "100%",
              background: "white",
              height: "345px",
              display: { lg: "flex", sm: "none", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "14px",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#1A1919",
                textAlign: "center",
                position: "relative",
                top: "16px",
              }}
            >
              CSV Data
            </Typography>
            <OrderTable loadedWidth={500} loadedHeight={300} />
          </Box>
        </Grid2>
        <Grid2 size={{ lg: 6, sm: 12 }}>
          <Box
            sx={{
              height: "345px",
              width: "100%",
              background: "white",
              borderRadius: "14px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  top: "12px",

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "34px",
                    lineHeight: "42px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  $37.5K
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "28px",
                    color: "#05CD99",
                  }}
                >
                  On Track
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                  component="img"
                  src={chart7}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ sm: 12, lg: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { lg: "345px", xs: "410px", sm: "410px" },
              background: "#FFFFFF",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "47px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                position: "relative",

                top: "27px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "48px",
                  width: "48px",
                }}
                component="img"
                src={supporticon}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#A3AED0",
                  }}
                >
                  Business Design
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "28px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  New lession is available
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "26px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                  position: "relative",
                }}
              >
                What do you need to know to <br />
                create better products?
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "28px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                  width: "80%",
                  textAlign: "center",
                }}
              >
                To create better products, understand user needs, market trends,
                usability, feedback, competitive landscape, technology,
                scalability
              </Typography>
              <Button
                sx={{
                  background: "#4318FF",
                  borderRadius: "16px",
                  width: "120px",
                  height: "40px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                  }}
                >
                  Get Started
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ sm: 12, lg: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { lg: "345px", xs: "410px", sm: "410px" },
              background: "#FFFFFF",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "47px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                position: "relative",

                top: "27px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "48px",
                  width: "48px",
                }}
                component="img"
                src={fingerprint}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#A3AED0",
                  }}
                >
                  Discover our cards benefits, with one tap.
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "28px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  Control card security in-app with a tap
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "26px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "32px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                  position: "relative",
                }}
              >
                Effortless Card Management at Your Fingertips
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "28px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                  width: "80%",
                  textAlign: "center",
                }}
              >
                Unlock and Secure Your Card in One Tap – Experience ultimate
                convenience, seamless control, and enhanced security with just a
                single effortless action.
              </Typography>
              <Button
                sx={{
                  background: "#4318FF",
                  borderRadius: "16px",
                  width: "120px",
                  height: "40px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                  }}
                >
                  Get Cards
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Orders;
