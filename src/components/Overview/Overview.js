import React from "react";

import Grid from "@mui/material/Grid2";
import { Button, Container, Typography } from "@mui/material";
import chart1 from "../../assets/chart1.png";
import chart2 from "../../assets/chart2.png";
import chart3 from "../../assets/chart3.png";
import chart4 from "../../assets/chart4.png";
import rating from "../../assets/rating.png";
import { Box } from "@mui/material";
import downarrow from "../../assets/downarrow.png";
import uparrow from "../../assets/uparrow.png";
import Chart from "./Chart";
import Graph1 from '../../assets/Graph1.png'

import Task from "./Task";

import announcements from '../../assets/announcements.png'
import CustomCalendar from './CustomCalendar';
const Overview = () => {
  return (
    <>
      <Container
        sx={{
          background: "#DADBDE",
          height: { lg: "auto", xs: "auto", md: "auto", sm: "auto" },
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{lg:9,xs:12,sm:12}}>
            <Grid container spacing={2}>
              <Grid size={{ lg: 3, sm: 12,xs:12 }}>
                <Box sx={{
                  display:'flex',
                  justifyContent:'center'
                }}>
                  <Box
                    sx={{
                      width: '160px',
                      height: "248px",
                      background: "#FFFFFF",
                      borderRadius: "8px",
                      
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "20px",
                          marginTop: "10px",
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
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 800,
                              fontSize: "11px",
                              lineHeight: "14px",
                              display: "flex",
                              alignItems: "center",
                              color: "#4B465C",
                            }}
                          >
                            Total Pending <br /> Orders
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "8px",
                              lineHeight: "11px",
                              display: "flex",
                              alignItems: "center",
                              color: "#979797",
                              flex: "none",
                            }}
                          >
                            Today
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "23px",
                            textAlign: "center",
                            color: "#4B465C",
                          }}
                        >
                          10
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                        }}
                        component="img"
                        src={chart1}
                      ></Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
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
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "9.17972px",
                            lineHeight: "14px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Current Daily Order
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: "8px",
                            lineHeight: "14px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Volume limitation
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "8.80149px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "right",
                          color: "#4B465C",
                        }}
                      >
                        10000
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ lg: 3, sm: 12,xs:12 }}>
                <Box sx={{  display:'flex',
                  justifyContent:'center'}}>
                  <Box
                    sx={{
                      width: "160.75px",
                      height: "248px",
                      background: "#FFFFFF",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "20px",
                          marginTop: "10px",
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
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 800,
                              fontSize: "11px",
                              lineHeight: "14px",
                              display: "flex",
                              alignItems: "center",
                              color: "#4B465C",
                            }}
                          >
                            Best Selling Product <br /> sales Contribution
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "23px",
                            textAlign: "center",
                            color: "#4B465C",
                          }}
                        >
                          71%
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          position: "relative",
                          top: "20px",
                        }}
                        component="img"
                        src={chart2}
                      ></Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
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
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "9px",
                            lineHeight: "12px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                            position: "relative",
                            top: "14px",
                          }}
                        >
                          Best selling Products <br />
                          Low Stock Level
                        </Typography>
                        <Box
                          sx={{
                            width: "110px",
                            position: "relative",
                            top: "10px",
                          }}
                          component="hr"
                        ></Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "9px",
                              lineHeight: "12px",
                              display: "flex",
                              alignItems: "center",
                              color: "#4B465C",
                            }}
                          >
                            Total out of Stock
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "10px",
                              lineHeight: "17px",
                              display: "flex",
                              alignItems: "center",
                              textAlign: "center",
                              color: "#4B465C",
                            }}
                          >
                            1351
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "8.80149px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "right",
                          color: "#4B465C",
                          position: "relative",

                          position: "relative",
                          top: "1px",
                          right: "30px",
                        }}
                      >
                        1
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid Grid size={{ lg: 3, sm: 12,xs:12 }}>
                <Box sx={{  display:'flex',
                  justifyContent:'center'}}>
                  <Box
                    sx={{
                      width: "160.75px",
                      height: "248px",
                      background: "#FFFFFF",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "20px",
                          marginTop: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 800,
                              fontSize: "11px",
                              lineHeight: "14px",
                              display: "flex",
                              alignItems: "center",
                              color: "#4B465C",
                            }}
                          >
                            Your Rating
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "23px",
                            textAlign: "center",
                            color: "#4B465C",
                          }}
                        >
                          1.3
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          position: "relative",
                          top: "20px",
                        }}
                        component="img"
                        src={rating}
                      ></Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          top: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "9px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Canceling- Seller Related
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "9px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            color: "#EA5455",
                          }}
                        >
                          Very Poor
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "8.80149px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "right",
                          color: "#4B465C",
                          position: "relative",
                          top: "20px",
                        }}
                      >
                        6%
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          top: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "9px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Handling Time With SLA
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "9px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            color: "#EA5455",
                          }}
                        >
                          Very Poor
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "8.80149px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "right",
                          color: "#4B465C",
                          position: "relative",
                          top: "20px",
                        }}
                      >
                        88%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ lg: 3, sm: 12,xs:12 }}>
                <Box sx={{  display:'flex',
                  justifyContent:'center'}}>
                  <Box
                    sx={{
                      width: "160.75px",
                      height: "248px",
                      background: "#FFFFFF",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "20px",
                          marginTop: "10px",
                          width: "80%",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 800,
                              fontSize: "11px",
                              lineHeight: "14px",
                              display: "flex",
                              alignItems: "center",
                              color: "#4B465C",
                            }}
                          >
                            New Product Creation
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Roboto'",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "8px",
                              lineHeight: "11px",
                              display: "flex",
                              alignItems: "center",
                              color: "#979797",
                              flex: "none",
                            }}
                          >
                            (Last 14 Days)
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: "23px",
                            textAlign: "center",
                            color: "#4B465C",
                          }}
                        >
                          1549
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                        }}
                        component="img"
                        src={chart3}
                      ></Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
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
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "17px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Approved
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "11.6451px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          color: "#4B465C",
                        }}
                      >
                        3928
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        position: "relative",
                        top: "40px",
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
                            fontFamily: "'Roboto'",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "17px",
                            display: "flex",
                            alignItems: "center",
                            color: "#4B465C",
                          }}
                        >
                          Pending
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "11.6451px",
                          lineHeight: "17px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          color: "#4B465C",
                        }}
                      >
                        227
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ lg: 6, sm: 12 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "328px",
                    marginTop: "24px",
                    background: "white",
                    borderRadius: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      top: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "14px",
                          lineHeight: "22px",
                          letterSpacing: "0.5px",
                          color: "#363740",
                        }}
                      >
                        Sales Summary
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "8px",
                          lineHeight: "9px",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.180948px",
                          color: "#979797",
                        }}
                      >
                        View Report
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "9px",
                        position: "relative",
                        left: "13px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "28px",
                          letterSpacing: "0.5px",
                          color: "#363740",
                        }}
                      >
                        3k
                      </Typography>
                      <Box
                        sx={{
                          width: "9px",
                          height: "10px",
                        }}
                        component="img"
                        src={downarrow}
                      ></Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "12px",
                          lineHeight: "12px",
                          letterSpacing: "0.5px",
                          color: "#EA5455",
                        }}
                      >
                        2.1
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "10px",
                          lineHeight: "12px",
                          letterSpacing: "0.5px",
                          color: "#979797",
                        }}
                      >
                        vs Last Week
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <Box component='img' sx={{
                      width: '100%',
                      height: '100%'
                    }} src={chart4}></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ lg: 6, sm: 12 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "328px",
                    marginTop: "24px",
                    background: "white",
                    borderRadius: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      top: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "14px",
                          lineHeight: "22px",
                          letterSpacing: "0.5px",
                          color: "#363740",
                        }}
                      >
                        Order Volume
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "8px",
                          lineHeight: "9px",
                          display: "flex",
                          alignItems: "center",
                          letterSpacing: "0.180948px",
                          color: "#979797",
                        }}
                      >
                        View Report
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "9px",
                        position: "relative",
                        left: "13px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "28px",
                          letterSpacing: "0.5px",
                          color: "#363740",
                        }}
                      >
                        5.51K
                      </Typography>
                      <Box
                        sx={{
                          width: "9px",
                          height: "10px",
                        }}
                        component="img"
                        src={uparrow}
                      ></Box>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "12px",
                          lineHeight: "12px",
                          letterSpacing: "0.5px",
                          color: "#37CB79",
                        }}
                      >
                        2.1
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "10px",
                          lineHeight: "12px",
                          letterSpacing: "0.5px",
                          color: "#979797",
                        }}
                      >
                        vs Last Week
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      width: '100%',
                      left: '-40px',
                      height: '100%',
                      position: 'relative',
                      top: '40px',

                      flexDirection: 'column',

                      scale: { lg: 0.8, xs: 0.5, sm: 0.5, md: 0.8 }

                    }} ><Chart /></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box sx={{
                  width: '100%',


                }} component='img' src={announcements}>

                </Box>
              </Grid>

            </Grid>

          </Grid>

          <Grid size={{ xl: 3, lg: 3, sm: 12, xs: 12 }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '45px'
            }}>
              <Box sx={{
                width: '240px',
                height: '247px',
                background: 'white',
                borderRadius: "8px",
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  top: '12px'
                }}>
                  <Typography sx={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    color: "#A3AED0"
                  }}>Daily Traffic</Typography>
                  <Typography sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "34px",
                    lineHeight: "42px",
                    letterSpacing: "-0.02em",
                    color: "#2B3674"
                  }}>2.579</Typography>
                  <Box sx={{
                    width: '80%'
                  }} component='img' src={Graph1}></Box>

                  <Box sx={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <Button
                      sx={{
                        background: "#4318FF",
                        borderRadius: "16px",
                        width: "110px",
                        height: "40px",
                        position: 'relative',
                        top: '23px'
                      }}
                    >
                      <Typography
                        sx={{
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "12px",
                          lineHeight: "24px",
                          textAlign: "center",
                          letterSpacing: "-0.02em",
                          color: "#FFFFFF",
                        }}
                      >
                        Refresh
                      </Typography>
                    </Button>
                    <Button sx={{
                      background: "#4318FF",
                      borderRadius: "16px",
                      width: "110px",
                      height: "40px",
                      position: 'relative',
                      top: '23px'
                    }} variant="outlined">
                      <Typography sx={{
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "12px",
                        lineHeight: "24px",
                        textAlign: "center",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",

                      }}>Pending</Typography>
                    </Button>
                  </Box>


                </Box>
              </Box>
              <Box sx={{
                width: '240px',
                maxHeight:'326px',
                overflow:'scroll',
                height: '326px',
                background: 'white',
                position: 'relative',
                top: '-20px',
                borderRadius: "8px",

              }}>
                <Task/>

                
              </Box>

              <Box sx={{
                width: '240px',
                height: '325px',
                background: 'white',
                position: 'relative',
                top: '-45px',
                borderRadius: "8px",
              }}>
                <CustomCalendar/>
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Overview;
