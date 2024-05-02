import { Box, Flex, Heading, Text, VStack, Button, SimpleGrid, useColorModeValue, Badge, Link } from '@chakra-ui/react';
import { FaNetworkWired, FaChartLine, FaBell, FaToolbox } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box p={5}>
      <Flex direction="column" gap={5}>
        <Heading as="h1" size="xl" textAlign="center">Network Automation Dashboard</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          <Box bg={bg} p={5} shadow="md" borderRadius="lg">
            <Flex alignItems="center" gap={2}>
              <FaNetworkWired size="24px" />
              <Text fontSize="lg" fontWeight="bold">Network Overview</Text>
            </Flex>
            <Badge colorScheme="green" p={1} mt={2}>Operational</Badge>
          </Box>
          <Box bg={bg} p={5} shadow="md" borderRadius="lg">
            <Flex alignItems="center" gap={2}>
              <FaChartLine size="24px" />
              <Text fontSize="lg" fontWeight="bold">Analytics</Text>
            </Flex>
            <Text mt={2}>Real-time performance data</Text>
          </Box>
          <Box bg={bg} p={5} shadow="md" borderRadius="lg">
            <Flex alignItems="center" gap={2}>
              <FaBell size="24px" />
              <Text fontSize="lg" fontWeight="bold">Alerts</Text>
            </Flex>
            <Text mt={2}>Live notifications feed</Text>
          </Box>
          <Box bg={bg} p={5} shadow="md" borderRadius="lg">
            <Flex alignItems="center" gap={2}>
              <FaToolbox size="24px" />
              <Text fontSize="lg" fontWeight="bold">Tools</Text>
            </Flex>
            <Text mt={2}>Quick access to automation tasks</Text>
          </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" mt={5}>
          <Button colorScheme="blue">Refresh Data</Button>
          <Button colorScheme="red">Emergency Stop</Button>
        </Flex>
        <Box bg={bg} p={5} shadow="md" borderRadius="lg" mt={5}>
          <Heading as="h3" size="lg">Vendor Specific Controls</Heading>
          <VStack mt={3}>
            <Link href="#" color={color}>Cisco</Link>
            <Link href="#" color={color}>Juniper</Link>
            <Link href="#" color={color}>Huawei</Link>
          </VStack>
        </Box>
        <Box as="footer" mt={10} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Network Dashboard. All rights reserved.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;