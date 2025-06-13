// frontend/pages/index.tsx
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import HomePage from "../components/HomePage";
import Sidebar from "../components/Sidebar";

const pageList = ["home", "brief", "storyboard", "material", "clip", "compose"];

export default function IndexPage() {
  const [page, setPage] = useState("home");

  return (
    <Box minH="100vh" bgGradient="linear(135deg, #6a82fb 0%, #fc5c7d 100%)">
      <Flex>
        <Sidebar current={page} onNav={setPage} />
        <Box flex={1} minH="100vh">
          {page === "home" && <HomePage />}
        </Box>
      </Flex>
    </Box>
  );
}