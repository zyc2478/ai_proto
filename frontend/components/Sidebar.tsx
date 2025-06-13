import { Box, VStack, Text, Button, Flex } from "@chakra-ui/react";

const menu = [
  { key: "home", label: "Home" },
  { key: "brief", label: "Story" },
  { key: "storyboard", label: "StoryBoard" },
  { key: "material", label: "Image" },
  { key: "clip", label: "Clip" },
  { key: "compose", label: "Video" },
];

export default function Sidebar({ current, onNav }: { current: string, onNav: (key: string) => void }) {
  return (
    <Flex
      w={{ base: "64px", md: "220px" }}
      minH="100vh"
      bg="whiteAlpha.900"
      borderRight="1px solid #e0e0e0"
      px={{ base: 2, md: 6 }}
      py={8}
      position="sticky"
      top={0}
      zIndex={20}
      boxShadow="0 2px 12px 0 rgba(106,130,251,0.07)"
      direction="column"
      justify="space-between"
      align={{ base: "center", md: "flex-start" }}
    >
      <Box w="100%">
        <Flex justify="center" align="center" w="100%" mb={10}>
          <Text fontSize="2xl" fontWeight="bold" color="#6a82fb" letterSpacing={2} textAlign="center">
            Flixor
          </Text>
        </Flex>
        <VStack align="stretch" spacing={2} flex={1} w="100%">
          {menu.map(item => (
            <Button
              key={item.key}
              variant={current === item.key ? "solid" : "ghost"}
              color={current === item.key ? "white" : "#6a82fb"}
              bg={current === item.key ? "#6a82fb" : "transparent"}
              fontWeight={current === item.key ? 700 : 500}
              fontSize="lg"
              borderRadius={8}
              justifyContent="flex-start"
              px={4}
              py={2}
              _hover={{ bg: "#e0e7ff", color: "#6a82fb" }}
              onClick={() => onNav(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>
      <Button colorScheme="messenger" w="100%" borderRadius={8} fontWeight={600} bg="#6a82fb" mt={8}>
        登录
      </Button>
    </Flex>
  );
} 