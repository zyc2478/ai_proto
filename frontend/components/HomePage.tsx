import { Box, Text, Button } from "@chakra-ui/react";
import Masonry from "react-masonry-css";

const videoCovers = Array.from({ length: 20 }, (_, i) => `视频封面${i + 1}`);

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default function HomePage() {
  return (
    <Box w="100%" px={{ base: 2, md: 8 }} py={8}>
      {/* 顶部横幅 Banner 区域 */}
      <Box
        bgGradient="linear(90deg, #6a82fb 0%, #fc5c7d 100%)"
        py={10}
        px={8}
        textAlign="center"
        borderRadius="16px"
        color="white"
        mb={8}
        boxShadow="0 8px 32px 0 rgba(106,130,251,0.18)"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={3}>释放你的创意，AI驱动视频创作</Text>
        <Button size="lg" colorScheme="messenger" bg="#6a82fb">立即体验</Button>
      </Box>
      {/* Masonry 瀑布流区域为白色半透明背景、圆角18px、阴影较浅 */}
      <Box
        bg="whiteAlpha.85"
        borderRadius="18px"
        boxShadow="0 8px 32px 0 rgba(106,130,251,0.10)"
        p={{ base: 2, md: 8 }}
        mt={0}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {videoCovers.map((cover, i) => (
            <Box
              key={i}
              bg="#e0e7ff"
              borderRadius="16px"
              boxShadow="0 2px 12px 0 rgba(106,130,251,0.08)"
              h={`${180 + (i % 6) * 30}px`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              color="#b3b8d0"
              mb={6}
              mx={2}
            >
              {cover}
            </Box>
          ))}
        </Masonry>
      </Box>
      <style jsx global>{`
        .masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .masonry-grid_column > div {
          margin-bottom: 16px;
        }
      `}</style>
    </Box>
  );
} 