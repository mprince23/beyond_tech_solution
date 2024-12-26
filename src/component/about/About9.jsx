import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import aboutData from "../globle/aboutProps";

const About9 = () => {
  const { image, title, description } = aboutData;

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          height: { xs: "60vh", sm: "70vh", md: "75vh", lg: "80vh" },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(248, 247, 247, 0.4)",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                px: { xs: 2, sm: 4, md: 8, lg: 12 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "22px", sm: "28px", md: "36px", lg: "42px" },
                  color: "black",
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  mb: 2,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                  width: { xs: "100%", sm: "90%", md: "80%", lg: "60%" },
                  color: "black",
                }}
              >
                {description}
              </Typography>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  height: { xs: "40px", sm: "45px", md: "50px" },
                  width: { xs: "180px", sm: "200px", md: "220px" },
                  marginTop: "40px",
                  borderRadius: "30px",
                  fontSize: { xs: "12px", sm: "14px" },
                  textTransform: "unset",
                }}
              >
                Let’s Develop Together
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default About9;
