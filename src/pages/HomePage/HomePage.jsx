import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        {/* Feed Post (middle) */}
        <Box Flex={2} py={10}>
          <FeedPosts />
        </Box>

        {/* Suggested Users (right) */}
        <Box flex={3} display={{ base: 'none', lg: 'block' }} maxW={'300px'}>
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;