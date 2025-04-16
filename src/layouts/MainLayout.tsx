import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

function MainLayout() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <main className="main-section">
        <Outlet />
      </main>
    </Container>
  );
}

export default MainLayout;
