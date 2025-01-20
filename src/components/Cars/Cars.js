import React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, Input, Select } from '@mui/material';
import Stats from '../../assets/Stats.png'
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { TextField } from '@mui/material';
import Table from './Table';

function Cars() {
    return (
        <>
            <Grid container spacing={4}>
                <Grid size={{ lg: 4, sm: 12 }}>
               


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '85vh',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        gap: '16px',
                        position: 'relative',
                        top: '19px',
                        borderRadius: '8px'

                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            top: '10px'
                        }}>
                            <Typography sx={{
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "#525256",

                            }}>Todays Statistics</Typography>
                            <Typography sx={{
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "18px",
                                color: "#A3A3A3",
                            }}>Tue, 14 Nov, 2022, 11.30 AM </Typography>
                        </Box>




                        <Box sx={{
                            width: "288px",
                            height: "190px",
                            background: "#FDFDFD",
                            boxShadow: "0px 8px 24px rgba(69, 69, 80, 0.1)",
                            borderRadius: "8px",
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Typography sx={{
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "24px",
                                    color: "#656575",
                                }}>Income</Typography>
                                <Typography sx={{
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    textAlign: "right",
                                    color: "#656575",
                                }}>Today</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center'

                            }}>
                                <Typography sx={{
                                    fontStyle: "normal",
                                    fontWeight: 700,
                                    fontSize: "28px",
                                    lineHeight: "40px",
                                    color: "#01150C",
                                }}>$ 9460.00</Typography>
                                <Typography sx={{
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "28px",
                                    letterSpacing: "-0.009em",
                                    color: "#FF2727",
                                }}>↓ 1.5%</Typography>

                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: "center" }}>
                                <Typography>Last Week Income</Typography>
                                <Typography>$25658.00</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "288px",
                            height: "80%",
                            background: "#FDFDFD",
                            boxShadow: "0px 8px 24px rgba(69, 69, 80, 0.1)",
                            borderRadius: "8px",
                        }}>
                            <Box sx={{
                                display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: "center", position: 'relative',
                                top: '20px'
                            }}>
                                <Typography sx={{

                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "24px",
                                    color: "#656575",
                                }}>Hire vs Cancel</Typography>
                                <Typography sx={{
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    lineHeight: "16px",
                                    textAlign: "right",
                                    color: "#656575",
                                }}>Today</Typography>

                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                top: '40px'
                            }}>
                                <Box sx={{
                                    width: '80%',
                                    height: 'auto'
                                }} component='img' src={Stats}></Box>
                            </Box>



                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ lg: 8, sm: 12 }}>
                
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                     
                    }}>
                        <Box sx={{
                            width: '100%',
                            background: "#FFFFFF",
                            boxShadow: "0px 8px 24px rgba(69, 69, 80, 0.1)",
                            borderRadius: "8px",
                            height: '160px',
                            position: 'relative',
                            top: '19px',
                        }}>
                            <Typography sx={{
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#1A1919",
                                textAlign: 'center',
                                position: 'relative',
                                top: '16px'
                            }}>Car Availablity</Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                left: '10px',
                                top: '25px'

                            }}>


                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label"> Car</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Car"
                                        >
                                            <MenuItem value={10}>Innova</MenuItem>
                                            <MenuItem value={20}>Scorpio-N</MenuItem>
                                            <MenuItem value={30}>Safari</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <TextField sx={{
                                    width: '150px'
                                }} id="outlined-basic" label="Enter Date" variant="outlined" />
                                <TextField sx={{
                                    width: '150px'
                                }} id="outlined-basic" label="Destination" variant="outlined" />
                                <Button sx={{
                                    width: "112px",
                                    height: "55px",
                                    background: "#4318FF",
                                    borderRadius: "16px",
                                }}>
                                    <Typography sx={{
                                         fontStyle: "normal",
                                         fontWeight: 600,
                                         fontSize: "12px",
                                         lineHeight: "24px",
                                         textAlign: "center",
                                         letterSpacing: "-0.02em",
                                         color: "#FFFFFF",
                                    }}>
                                        Check
                                    </Typography>
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundColor: 'white',
                        height: '380px',
                        width: '100%',
                        position:'relative',
                        top:'40px'
                    }}>
                        <Table/>

                    </Box>
       
                </Grid>
                
            </Grid>

        </>
    );
}

export default Cars;