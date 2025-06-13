import { Box, VStack, Text, Button, Flex, Circle } from "@chakra-ui/react";
import { FiHome, FiEdit, FiImage, FiFilm, FiScissors } from "react-icons/fi";
import { useState, useEffect } from "react";

const menu = [
  { key: "home", label: "主页", page: "home", icon: FiHome },
  { key: "brief", label: "创意生成", page: "storyboard", icon: FiEdit },
  { key: "material", label: "Image生成", page: "material", icon: FiImage },
  { key: "clip", label: "Clip生成", page: "clip", icon: FiFilm },
  { key: "compose", label: "剪辑成片", page: "compose", icon: FiScissors },
];

export const FLIXOR_MAIN_COLOR = "#6a82fb";

export default function Sidebar({ current, onNav }: { current: string, onNav: (key: string) => void }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (current === "home") {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [current]);

  return (
    <Flex
      w={collapsed ? "64px" : { base: "64px", md: "220px" }}
      minH="100vh"
      bg="whiteAlpha.900"
      borderRight="1px solid #e0e0e0"
      px={2}
      py={8}
      position="sticky"
      top={0}
      zIndex={20}
      boxShadow="0 2px 12px 0 rgba(106,130,251,0.07)"
      direction="column"
      justify="space-between"
      align={collapsed ? "center" : { base: "center", md: "flex-start" }}
      transition="width 0.2s"
    >
      <Box w="100%">
        <Flex justify="center" align="center" w="100%" mb={10}>
          {collapsed ? (
            <Circle size="40px" bg="#6a82fb" color="white" fontWeight="bold" fontSize="2xl" boxShadow="0 2px 8px 0 rgba(106,130,251,0.15)">
              F
            </Circle>
          ) : (
            <Text fontSize="2xl" fontWeight="bold" color="#6a82fb" letterSpacing={2} textAlign="center">
              Flixor
            </Text>
          )}
        </Flex>
        <VStack align="stretch" spacing={2} flex={1} w="100%">
          {menu.map(item => {
            const Icon = item.icon;
            return (
              <Button
                key={item.key}
                variant={current === item.key ? "solid" : "ghost"}
                color={current === item.key ? "white" : "#6a82fb"}
                bg={current === item.key ? "#6a82fb" : "transparent"}
                fontWeight={current === item.key ? 700 : 500}
                fontSize="md"
                borderRadius={8}
                justifyContent={collapsed ? "center" : "flex-start"}
                px={collapsed ? 0 : 4}
                py={2}
                _hover={{ bg: "#e0e7ff", color: "#6a82fb" }}
                onClick={() => onNav(item.page)}
                w="100%"
                minW={0}
              >
                {collapsed ? <Icon size={22} /> : <><Icon style={{ marginRight: 12 }} />{item.label}</>}
              </Button>
            );
          })}
        </VStack>
      </Box>
      <Button colorScheme="messenger" w="100%" borderRadius={8} fontWeight={600} bg="#6a82fb" mt={8}>
        {collapsed ? <FiHome size={22} /> : "登录"}
      </Button>
    </Flex>
  );
} 