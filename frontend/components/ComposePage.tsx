import { Box, Text } from "@chakra-ui/react";

export default function ComposePage() {
  return (
    <Box minH="400px" display="flex" alignItems="center" justifyContent="center" bg="whiteAlpha.900" borderRadius="18px" boxShadow="0 8px 32px 0 rgba(106,130,251,0.10)" mt={12}>
      <Text w="full" textAlign="center" fontSize="2xl" color="#6a82fb" fontWeight="bold" letterSpacing={2}>
        敬请期待
      </Text>
    </Box>
  );
} 