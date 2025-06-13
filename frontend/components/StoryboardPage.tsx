import { useState } from "react";
import { Box, Button, Flex, Text, Textarea, VStack, Progress, Image, SimpleGrid } from "@chakra-ui/react";
import { FLIXOR_MAIN_COLOR } from "./Sidebar";

const defaultStory =
  "2026世界杯期间，时尚女孩身着潮流衣装，在赛场边精心喷上雅诗兰黛香水，那迷人芬芳瞬间飘散。赛后她走进赛场周边咖啡馆休息，活力男孩也因对足球的热爱踏入这里。女孩身上雅诗兰黛香水的独特气息吸引了男孩，两人因足球话题相谈甚欢。香水的芬芳在空气中弥漫，仿佛为这段相遇增添了浪漫滤镜。此后，他们的爱情如世界杯的热情般炽热甜蜜，雅诗兰黛香水见证了这段美好缘分。";

const sceneImgs = [
  { src: "/img/场景1.jpeg", label: "场景1" },
  { src: "/img/场景2.jpeg", label: "场景2" },
  { src: "/img/场景3.jpeg", label: "场景3" },
  { src: "/img/场景4.jpeg", label: "场景4" },
];

const shots = [
  {
    title: "镜头1",
    desc: "1. 画面中，一位时尚女孩站在赛场边的角落，她身着时尚潮流的运动套装，背着一个小巧精致的背包。女孩神情兴奋，眼神中满是对比赛的期待。她从背包里拿出一瓶雅诗兰黛香水，轻轻拧开瓶盖，在手腕和脖颈处喷洒。那香水的液体晶莹剔透，喷洒出来的瞬间，细腻的雾状芬芳飘散在空气中，女孩闭上眼睛，享受着这迷人的香气。",
    imgs: ["/img/1-1.jpeg", "/img/1-2.jpeg"],
  },
  {
    title: "镜头2",
    desc: "2. 女孩比赛结束后，带着满足的笑容走进咖啡馆，找了个靠窗的位置坐下，点了一杯咖啡。不一会儿，一位活力男孩也走进了咖啡馆，他穿着印有球队标志的球衣，脸上洋溢着对足球的热情。男孩环顾四周，准备找个空位，这时，女孩身上雅诗兰黛香水的独特气息飘进了他的鼻子，他的目光不由自主地落在了女孩身上。",
    imgs: ["/img/2-1.jpeg", "/img/2-2.jpeg"],
  },
  {
    title: "镜头3",
    desc: "3. 男孩鼓起勇气走到女孩桌前，礼貌地询问是否可以坐下，女孩微笑着点头。两人开始聊起刚刚结束的比赛，越聊越投机，他们的眼神中都闪烁着光芒。此时，雅诗兰黛香水的芬芳在他们周围轻轻弥漫，仿佛为这个温馨的场景增添了一层浪漫的薄纱。桌上的咖啡冒着热气，与香水的香气交织在一起。",
    imgs: ["/img/3-1.jpeg", "/img/3-2.jpeg"],
  },
  {
    title: "镜头4",
    desc: "4. 正当两人聊得火热时，女孩的手机突然响起，她接起电话后，脸色变得有些担忧。原来家里有急事需要她马上回去。女孩抱歉地看着男孩，准备起身离开。男孩有些失落，眼神中流露出不舍。此时，窗外的大雨仿佛也在为这可能的分别增添了一丝忧伤的氛围，而雅诗兰黛香水的味道也似乎变得有些苦涩。",
    imgs: ["/img/4-1.jpeg", "/img/4-2.jpeg"],
  },
  {
    title: "镜头5",
    desc: "5. 女孩起身准备离开，男孩着急地拉住她的手，大声说：\"等雨停了再走吧。\"女孩停下脚步，看着男孩真诚的眼神，心中一阵感动。两人站在门口，雨水在他们身边飞溅，而雅诗兰黛香水的芬芳在雨中更加浓郁。他们四目相对，气氛变得暧昧而浪漫。",
    imgs: ["/img/5-1.jpeg", "/img/5-2.jpeg"],
  },
  {
    title: "镜头6",
    desc: "6. 男孩和女孩手牵手走出咖啡馆，街道两旁的花朵在雨后显得格外娇艳。他们漫步在街道上，脸上都洋溢着幸福的笑容。雅诗兰黛香水的味道在他们身边萦绕，仿佛是他们爱情的见证。阳光洒在他们身上，形成了一幅美丽的画面。",
    imgs: ["/img/6-1.jpeg", "/img/6-2.jpeg"],
  },
  {
    title: "镜头7",
    desc: "7. 画面中，男孩和女孩的身影渐渐模糊，只剩下那瓶雅诗兰黛香水清晰地呈现在画面中央。香水在阳光下闪烁着光芒，旁边出现一行字幕：\"雅诗兰黛香水，见证2026世界杯的浪漫爱情。\"",
    imgs: ["/img/7-1.jpeg", "/img/7-2.jpeg"],
  },
];

interface Props {
  onNext: () => void;
}

export default function StoryboardPage({ onNext }: Props) {
  const [story, setStory] = useState(defaultStory);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleGen = () => {
    setLoading(true);
    setShowResult(false);
    setProgress(0);
    let prog = 0;
    const timer = setInterval(() => {
      prog += Math.random() * 20 + 10;
      if (prog >= 100) {
        prog = 100;
        clearInterval(timer);
        setLoading(false);
        setShowResult(true);
      }
      setProgress(prog);
    }, 400);
  };

  return (
    <Box w="100%" maxW="100vw" mx="auto" mt={0} bg="white" borderRadius="0" boxShadow="0 4px 24px 0 rgba(106,130,251,0.08)" p={{ base: 2, md: 10 }}>
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">生成StoryBoard</Text>
        <Flex gap={3}>
          <Button bg={FLIXOR_MAIN_COLOR} color="white" _hover={{ bg: '#5a6eea' }} size="sm">导入StoryBoard</Button>
          <Button colorScheme="messenger" variant="solid" size="sm" color="white">导入StoryBoard</Button>
        </Flex>
      </Flex>
      <Box mb={6}>
        <Text mb={2} color="#6a82fb" fontWeight={500}>品牌Story</Text>
        <Flex gap={2}>
          <Textarea value={story} onChange={e => setStory(e.target.value)} rows={6} fontSize="md" />
          <Button colorScheme="messenger" onClick={handleGen} isLoading={loading}>生成StoryBoard</Button>
        </Flex>
      </Box>
      {loading && (
        <Box my={8}>
          <Progress value={progress} size="md" colorScheme="messenger" borderRadius={4} />
          <Text color="#6a82fb" mt={2}>正在生成StoryBoard...</Text>
        </Box>
      )}
      {showResult && (
        <>
          <Text fontWeight={600} my={8}>故事场景</Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={8}>
            {sceneImgs.map((img, i) => (
              <Box key={i} textAlign="center">
                <Image src={img.src} alt={img.label} borderRadius="12px" w="100%" h="120px" objectFit="cover" mb={2} />
                <Text color="#6a82fb" fontWeight={500}>{img.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <Text fontWeight={600} my={8}>分镜剧情</Text>
          <VStack spacing={8} align="stretch">
            {shots.map((shot, i) => (
              <Flex key={i} align="center" justify="space-between" gap={4}>
                <Text flexShrink={0} color="#6a82fb" fontWeight={600} fontSize="lg" minW="70px">{shot.title}</Text>
                <Text flex={1} maxW="32%" px={4}>{shot.desc}</Text>
                <Flex flex={1.5} gap={4} w="100%">
                  {shot.imgs.map((src, j) => (
                    <Image key={j} src={src} borderRadius="12px" w={`${100 / shot.imgs.length - 2}%`} h="180px" objectFit="cover" />
                  ))}
                </Flex>
              </Flex>
            ))}
          </VStack>
        </>
      )}
      <Button colorScheme="messenger" size="lg" w="full" mt={10} onClick={onNext}>下一步：生成图像</Button>
    </Box>
  );
} 