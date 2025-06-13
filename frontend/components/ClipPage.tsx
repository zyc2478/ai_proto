import { useState } from "react";
import {
  Box, Button, Flex, Text, Image, Grid, Progress, VStack
} from "@chakra-ui/react";

const shotPrompts = [
  "画面中，一位时尚女孩站在赛场边的角落，她身着时尚潮流的运动套装，背着一个小巧精致的背包。女孩神情兴奋，眼神中满是对比赛的期待。她从背包里拿出一瓶雅诗兰黛香水，轻轻拧开瓶盖，在手腕和脖颈处喷洒。那香水的液体晶莹剔透，喷洒出来的瞬间，细腻的雾状芬芳飘散在空气中，女孩闭上眼睛，享受着这迷人的香气。",
  "女孩比赛结束后，带着满足的笑容走进咖啡馆，找了个靠窗的位置坐下，点了一杯咖啡。不一会儿，一位活力男孩也走进了咖啡馆，他穿着印有球队标志的球衣，脸上洋溢着对足球的热情。男孩环顾四周，准备找个空位，这时，女孩身上雅诗兰黛香水的独特气息飘进了他的鼻子，他的目光不由自主地落在了女孩身上。",
  "男孩鼓起勇气走到女孩桌前，礼貌地询问是否可以坐下，女孩微笑着点头。两人开始聊起刚刚结束的比赛，越聊越投机，他们的眼神中都闪烁着光芒。此时，雅诗兰黛香水的芬芳在他们周围轻轻弥漫，仿佛为这个温馨的场景增添了一层浪漫的薄纱。桌上的咖啡冒着热气，与香水的香气交织在一起。",
  "正当两人聊得火热时，女孩的手机突然响起，她接起电话后，脸色变得有些担忧。原来家里有急事需要她马上回去。女孩抱歉地看着男孩，准备起身离开。男孩有些失落，眼神中流露出不舍。此时，窗外的大雨仿佛也在为这可能的分别增添了一丝忧伤的氛围，而雅诗兰黛香水的味道也似乎变得有些苦涩。",
  "女孩起身准备离开，男孩着急地拉住她的手，大声说:\"等雨停了再走吧。\"女孩停下脚步，看着男孩真诚的眼神，心中一阵感动。两人站在门口，雨水在他们身边飞溅，而雅诗兰黛香水的芬芳在雨中更加浓郁。他们四目相对，气氛变得暧昧而浪漫。",
  "男孩和女孩手牵手走出咖啡馆，街道两旁的花朵在雨后显得格外娇艳。他们漫步在街道上，脸上都洋溢着幸福的笑容。雅诗兰黛香水的味道在他们身边萦绕，仿佛是他们爱情的见证。阳光洒在他们身上，形成了一幅美丽的画面。",
  "画面中，男孩和女孩的身影渐渐模糊，只剩下那瓶雅诗兰黛香水清晰地呈现在画面中央。香水在阳光下闪烁着光芒，旁边出现一行字幕：\"雅诗兰黛香水，见证2026世界杯的浪漫爱情。\""
];

const shotImgs = [
  "/img/1-1.jpeg", "/img/2-1.jpeg", "/img/3-1.jpeg", "/img/4-1.jpeg",
  "/img/5-1.jpeg", "/img/6-1.jpeg", "/img/7-1.jpeg"
];

interface Props {
  onNext: () => void;
}

export default function ClipPage({ onNext }: Props) {
  const [currentShot, setCurrentShot] = useState(0);
  const [genLoading, setGenLoading] = useState(false);
  const [genClips, setGenClips] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // 镜头选择
  const handleSelectShot = (idx: number) => {
    setCurrentShot(idx);
    setGenClips([]);
  };

  // 生成Clip
  const handleGen = () => {
    setGenLoading(true);
    setProgress(0);
    setGenClips([]);
    let prog = 0;
    const timer = setInterval(() => {
      prog += Math.random() * 40 + 20;
      if (prog >= 100) {
        prog = 100;
        clearInterval(timer);
        setGenLoading(false);
        // 假设每个镜头有4个clip
        setGenClips([
          `/video/shot${currentShot + 1}-1.mp4`,
          `/video/shot${currentShot + 1}-2.mp4`,
          `/video/shot${currentShot + 1}-3.mp4`,
          `/video/shot${currentShot + 1}-4.mp4`
        ]);
      }
      setProgress(prog);
    }, 400);
  };

  return (
    <Box maxW="1100px" mx="auto" mt={12} bg="whiteAlpha.900" borderRadius="18px" boxShadow="0 8px 32px 0 rgba(106,130,251,0.10)" p={{ base: 4, md: 12 }}>
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">生成Clip短片</Text>
        <Button colorScheme="gray" variant="outline" size="sm">返回</Button>
      </Flex>
      {/* 镜头选择 */}
      <Flex gap={4} mb={8} overflowX="auto">
        {shotImgs.map((src, idx) => (
          <Box
            key={idx}
            border={currentShot === idx ? "3px solid #6a82fb" : "1px solid #e0e7ff"}
            borderRadius="16px"
            cursor="pointer"
            minW="260px"
            h="180px"
            position="relative"
            onClick={() => handleSelectShot(idx)}
          >
            <Image src={src} w="100%" h="100%" objectFit="cover" borderRadius="16px" />
            <Text position="absolute" left="14px" top="14px" bg="whiteAlpha.700" borderRadius="8px" px={3} color="#333" fontWeight={500}>
              镜头{idx + 1}
            </Text>
          </Box>
        ))}
      </Flex>
      {/* 参考图+提示词 */}
      <Flex gap={12} mb={8} align="flex-start" flexWrap="wrap">
        <Box w="400px">
          <Text color="#6a82fb" fontWeight={600} mb={2}>参考图</Text>
          <Image src={`/img/shot${currentShot + 1}-1.jpeg`} w="100%" h="260px" objectFit="contain" borderRadius="18px" bg="#e0e7ff" />
        </Box>
        <Box flex={1} minW="260px" maxW="420px">
          <Text fontWeight={600} mb={2}>提示词</Text>
          <Box p={4} border="1.5px solid #e5e7eb" borderRadius="10px" bg="white" fontSize="md" minH="60px" whiteSpace="pre-wrap">
            {shotPrompts[currentShot]}
          </Box>
        </Box>
      </Flex>
      {/* 生成按钮与进度条 */}
      <VStack spacing={4} mb={6}>
        <Button colorScheme="messenger" w="full" onClick={handleGen} isLoading={genLoading}>生成Clip</Button>
        {genLoading && <Progress w="full" value={progress} size="sm" colorScheme="messenger" borderRadius={2} />}
      </VStack>
      {/* 生成的Clip */}
      {genClips.length > 0 && (
        <Box mb={6}>
          <Text fontWeight={600} mb={2}>生成的Clip</Text>
          <Grid templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} gap={4}>
            {genClips.map((src, i) => (
              <Box key={i} borderRadius="12px" overflow="hidden" bg="#e0e7ff" aspectRatio="1.6">
                <video src={src} controls style={{ width: "100%", height: "100%", borderRadius: "12px", background: "#000" }} />
              </Box>
            ))}
          </Grid>
        </Box>
      )}
      <Button colorScheme="messenger" size="lg" w="full" mt={6} onClick={onNext}>下一步：视频合成</Button>
    </Box>
  );
} 