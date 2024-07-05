import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

const PostHeader = ({ username, avatar }) => {
  const [isFollowing, setisFollowing] = useState(false);

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} alt={username} size={'sm'}></Avatar>
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>
          {username}
          <Box color={'gray.500'}>· 1w</Box>
        </Flex>
      </Flex>

      <Box cursor={'pointer'} onClick={() => setisFollowing((prevState) => !prevState)}>
        <Text
          fontSize={12}
          fontWeight={'bold'}
          color={'blue.500'}
          _hover={{ color: 'white' }}
          transition={'0.2s ease-in-out'}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
