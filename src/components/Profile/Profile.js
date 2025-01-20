import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import bg1 from "../../assets/bg1.png";
import Avatar from "../../assets/Avatar.png";
import storageIcon from "../../assets/storageIcon.png";
import bar from "../../assets/bar.png";
function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ sm: 12, lg: 4 }}>
        <Box
          sx={{
            height: "365px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "131px",
            }}
            component="img"
            src={bg1}
          ></Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "-38px",
            }}
          >
            <Box
              sx={{
                width: "87px",
                height: "87px",
                position: "relative",
                top: "-3px",
              }}
              component="img"
              src={Avatar}
            ></Box>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "32px",
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#2B3674",
              }}
            >
              Adela Parkson
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                position: "relative",
                top: "35px",
              }}
            >
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
                    fontSize: "24px",
                    lineHeight: "100%",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  17
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Posts
                </Typography>
              </Box>
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
                    fontSize: "24px",
                    lineHeight: "100%",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  9.7K
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Followers
                </Typography>
              </Box>
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
                    fontSize: "24px",
                    lineHeight: "100%",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  274
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    textAlign: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Followers
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ sm: 12, lg: 4 }}>
        <Box
          sx={{
            width: "100%",
            height: "365px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "44px",
              gap: "6px",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100px",
                height: "100px",
              }}
              src={storageIcon}
            ></Box>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#2B3674",
                marginTop: "9px",
              }}
            >
              Your Storage
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                textAlign: "center",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
                width: "201px",
              }}
            >
              Supervise your drive space in the easiest way
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Box
              component="img"
              src={bar}
              sx={{
                width: "90%",
                height: "39px",
                marginTop: "80px",
              }}
            ></Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ lg: 4, sm: 12, xs: 12 }}>
        <Box
          sx={{
            background: "#FFFFFF",
            width: "100%",
            height: "365px",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              position: "relative",
              padding: "23px",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "32px",
                letterSpacing: "-0.02em",
                color: "#1B2559",
              }}
            >
              Top Creators
            </Typography>
            <Button
              sx={{
                background: "#F4F7FE",
                borderRadius: "70px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  letterSpacing: "-0.02em",
                  color: "#4318FF",
                  textTransform: "none",
                }}
              >
                See All
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
              }}
            >
              Name
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
              }}
            >
              Artworks
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
              }}
            >
              Rating
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                left: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#2B3674",
                }}
              >
                @maddison_c21
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#A3AED0",
                  position: "relative",
                  right: "10px",
                }}
              >
                9821
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.02em",
                  color: "#00000",
                  position: "relative",
                  left: "20px",
                }}
              >
                4.3
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, lg: 12 }}>
        <Box
          sx={{
            width: "100%",
            height: "554px",
            background: "white",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "31px",
              gap: "15px",
            }}
          >
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "-0.02em",
                color: "#2B3674",
              }}
            >
              General Information
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.02em",
                color: "#A3AED0",
              }}
            >
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all...
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Education
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  Stanford University
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Languages
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  English, Spanish, Italian
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Department
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  Product Design
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Work History
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  Google, Facebook
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
                  Birthday
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                20 Jan 2002
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFFFFF",
                  boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
                  borderRadius: "16px",
                  height: "91px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0",
                  }}
                >
             Organization
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.02em",
                    color: "#2B3674",
                  }}
                >
                  Simmmple Web LLC
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Profile;
