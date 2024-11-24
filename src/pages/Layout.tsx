import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";

export default function Layout() {
  return (
    <>
      <Container
        maxW="4xl"
        style={{
          minHeight: "100%",
        }}
      >
        <main
          style={{
            paddingBottom: "30px",
          }}
        >
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}
