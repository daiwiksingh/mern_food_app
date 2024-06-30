import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        <p><b>Welcome to My Restaurant</b></p>
Here, we believe that dining is more than just eating—it's an experience. Nestled in the heart of Delhi, our restaurant offers a unique blend of Multi couisine type flavors, carefully crafted to tantalize your taste buds and leave you craving more.
        </p>
        <p>
        <p><b>Our Story</b></p>
My Restaurant was born out of a passion for great food and a desire to create a place where people could gather to enjoy it. Founded in 2021, we have always strived to provide our guests with a memorable dining experience, combining exceptional cuisine with a warm, inviting atmosphere.
        </p>
        <p><p><b>Our Cuisine</b></p>
Our menu is a celebration of Multi cousine type, featuring a diverse selection of dishes made from the freshest, locally-sourced ingredients. From Masala Dosa to Gathiya, each plate is prepared with care and precision by our talented chefs. Whether you're in the mood for a hearty meal or a light snack, we have something to satisfy every palate.</p>
        <p><p><b>Our Commitment</b></p>
We are committed to delivering outstanding service and ensuring that every guest feels like a part of our family. Our team is passionate about hospitality and dedicated to making your visit special, whether you're here for a quick bite, a romantic dinner, or a celebration with friends and family.</p>
        <p><p><b>Our Space</b></p>
We offer a cozy, welcoming environment where you can relax and enjoy your meal. With elegant decor and a comfortable ambiance, our restaurant is the perfect place to unwind. We also offer private dining options for special occasions, as well as catering services to bring the taste to your events.</p>
        <p><p><b>Join Us</b></p>
We invite you to join us at My Reataurant and experience the magic of food. Come for the food, stay for the atmosphere, and leave with unforgettable memories. Thank you for choosing us, and we look forward to serving you soon.</p>
        <p><p><b>Contact us</b></p>For reservations, inquiries, or to learn more about our menu and services, please contact us at +918876543212 or myrestaurant332gmail.com. Follow us on Instagram for the latest updates and special offers.</p>    
      </Box>
    </Layout>
  );
};

export default About;