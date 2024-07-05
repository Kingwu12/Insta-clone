import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };
  return (
    <Box mb={10}>
      {/* Like and Comment horizontally aligned */}
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} marginTop={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      {/* liked count, comment, view all 1,000 comments section */}
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} Likes
      </Text>
      <Text fontWeight={700} fontSize={'sm'}>
        {username}{' '}
        <Text fontWeight={400} as={'span'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Text>
      <Text color={'gray'} fontSize={'sm'}>
        View all 1,000 comments
      </Text>

      {/* input comment section */}
      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14} color={'white'} />
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
