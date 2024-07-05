import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
import { Link } from 'react-router-dom';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
          See All
        </Text>
      </Flex>

      <SuggestedUser name='someone' followers={12312} avatar='' />
      <SuggestedUser name='someone' followers={12312} avatar='' />
      <SuggestedUser name='someone' followers={12312} avatar='' />

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        © built by{' '}
        <Link href='https://www.kingwu.net/' target='_blank' color='blue.500' fontSize={14}>
          King Wu
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
