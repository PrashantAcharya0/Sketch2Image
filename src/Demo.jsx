import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Demo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden", // horizontal scrollbars huna nadine if unnecessary
      }}
    >
      {/* Page ko header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.main", width: "100%" }} //.main utabata leko
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 25 }}>
            Sketch =&gt; Image
          </Typography>
          <Button sx={{ color: "#1a237e" }}>Home</Button>
          <Button sx={{ color: "#1a237e" }}>About</Button>
          <Button sx={{ color: "#1a237e" }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Page ko Main Content */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          px: 2, // Padding banako responsiveness lai
          width: "100%", // full width use garna
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#1a237e", mt: 10, mb: 4 }}
        >
          Turn Your Sketches Into Stunning Images
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ mb: 3, fontSize: 20 }}
        >
          Use our tool to transform hand-drawn sketches into beautiful images.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Upload Your Sketch
        </Typography>

        {/*Page ko Upload garne part */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            border: "2px dashed #90caf9",
            textAlign: "center",
            maxWidth: "400px",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, // Responsive width
            margin: "40px auto",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
            Drag & Drop or
          </Typography>
          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 1, backgroundColor: "secondary.main" }}
            component="label"
          >
            Click to Upload
          </Button>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            Supported formats: JPG, PNG
          </Typography>
        </Paper>
      </Box>

      {/* Page ko bottom part */}
      <Box
        sx={{
          py: 2,
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Box>
          <Button color="info" size="small">
            About
          </Button>
          <Button color="info" size="small">
            Contact
          </Button>
        </Box>
        <Typography variant="body2">
          © 2024 Sketch =&gt; Image. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Demo;
