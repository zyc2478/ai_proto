import { useState } from "react";
import { Box, Button, Flex, Input, Text, Textarea, VStack, Progress } from "@chakra-ui/react";

interface Props {
  onNext: () => void;
}

export default function BriefPage({ onNext }: Props) {
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [theme, setTheme] = useState("");
  const [themeLoading, setThemeLoading] = useState(false);
  const [refLink, setRefLink] = useState("");
  const [brief, setBrief] = useState("");
  const [briefLoading, setBriefLoading] = useState(false);

  // 主题生成逻辑
  const handleGenTheme = () => {
    setThemeLoading(true);
    setTimeout(() => {
      setThemeLoading(false);
      setTheme((prev) =>
        prev.trim() === "雅诗兰黛臻爱香水的2026世界杯奇遇"
          ? "雅诗兰黛香水，邂逅世界杯的浪漫心跳​"
          : "雅诗兰黛臻爱香水的2026世界杯奇遇"
      );
    }, 2000);
  };

  // Brief Story 生成逻辑
  const handleGenBrief = () => {
    setBriefLoading(true);
    setTimeout(() => {
      setBriefLoading(false);
      setBrief((prev) =>
        prev.trim()
          ? `世界杯赛场边，一位时尚女孩轻喷雅诗兰黛香水，晶莹芬芳绽放，满眼是对盛会的憧憬。\n\n赛后，她带着笑容走进咖啡馆小憩。片刻，一位活力四射的男孩——球衣还带着赛场的热情——步入店内。一丝独特的雅诗兰黛香气牵引了他的目光，自然地落在那位女孩身上。\n\n一场畅谈悄然开始。她眼中的光，他对足球的热忱，在咖啡香与雅诗兰黛的芬芳中共鸣。突如其来的电话却打破温馨——女孩需立刻返家。\n\n窗外大雨滂沱。男孩不舍挽留：\"等雨停好吗？\"门廊前，雨水飞溅，雅诗兰黛的馨香在潮湿空气里越发清冽迷人，映照着他真诚的目光和她心头的悸动。\n\n雨停。世界仿佛被洗亮。他们牵手漫步，雨后阳光为伴，雅诗兰黛的芬芳轻盈萦绕，仿佛无声诉说这段始于世界杯的心动轨迹。`
          : `时尚女孩驻足世界杯赛场边，眼中闪烁着兴奋。她轻喷雅诗兰黛香水，氤氲芬芳中满怀期待。赛后，她带着满足的笑走进街角咖啡馆。活力男孩循着那抹独特馨香走来，球衣映着热情。香水牵引着他坐到她对面，交谈瞬间点燃共同话题，咖啡香与雅诗兰黛交织出浪漫氛围。\n\n骤然响起的电话带来急讯，女孩面露忧色起身。窗外雨幕垂落，男孩不舍拉住她的手：\"等雨停。\" 四目相对间，雨点飞溅，却让香气在潮湿空气里愈发浓郁，暧昧丛生。\n\n雨霁天晴，他们牵手漫步。雨后花朵娇艳，阳光为伴，雅诗兰黛的芬芳萦绕左右，成为这段世界杯邂逅的最佳注脚。最终，画面聚焦阳光下璀璨的香水瓶与字幕：\"雅诗兰黛香水，见证2026世界杯的浪漫爱情。\"`
      );
    }, 2000);
  };

  return (
    <Box maxW="600px" mx="auto" mt={12} bg="whiteAlpha.900" borderRadius="18px" boxShadow="0 8px 32px 0 rgba(106,130,251,0.10)" p={{ base: 4, md: 12 }}>
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">生成Story</Text>
        <Button colorScheme="gray" variant="outline" size="sm">导入Story</Button>
      </Flex>
      <VStack spacing={6} align="stretch">
        <Box>
          <Text mb={2} color="#6a82fb" fontWeight={500}>品牌名称</Text>
          <Input placeholder="请输入品牌名称" value={brand} onChange={e => setBrand(e.target.value)} />
        </Box>
        <Box>
          <Text mb={2} color="#6a82fb" fontWeight={500}>产品名称</Text>
          <Input placeholder="请输入产品名称" value={product} onChange={e => setProduct(e.target.value)} />
        </Box>
        <Box>
          <Text mb={2} color="#6a82fb" fontWeight={500}>主题</Text>
          {themeLoading && <Progress size="xs" isIndeterminate colorScheme="messenger" mb={2} borderRadius={2} />}
          <Flex gap={2}>
            <Input placeholder="请输入视频主题" value={theme} onChange={e => setTheme(e.target.value)} />
            <Button colorScheme="messenger" onClick={handleGenTheme} isLoading={themeLoading}>生成主题</Button>
          </Flex>
        </Box>
        <Box>
          <Text mb={2} color="#6a82fb" fontWeight={500}>参考链接 <Text as="span" color="#b3b8d0" fontWeight="bold" fontSize="sm" title="品牌官方的电商店铺链接，比如京东、淘宝、天猫等官方链接">？</Text></Text>
          <Input placeholder="请输入参考链接" value={refLink} onChange={e => setRefLink(e.target.value)} />
        </Box>
        <Box>
          <Text mb={2} color="#6a82fb" fontWeight={500}>Brief Story</Text>
          {briefLoading && <Progress size="xs" isIndeterminate colorScheme="messenger" mb={2} borderRadius={2} />}
          <Flex gap={2}>
            <Textarea rows={3} placeholder="自动生成或导入Brief Story" value={brief} onChange={e => setBrief(e.target.value)} />
            <Button colorScheme="messenger" onClick={handleGenBrief} isLoading={briefLoading}>生成 Story</Button>
          </Flex>
        </Box>
      </VStack>
      <Button colorScheme="messenger" size="lg" w="full" mt={10} onClick={onNext}>下一步：生成StoryBoard</Button>
    </Box>
  );
} 