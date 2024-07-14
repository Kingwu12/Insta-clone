import { Avatar, AvatarGroup, Button, Flex, Text, useDisclosure, VStack } from '@chakra-ui/react';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/authStore';
import EditProfile from './EditProfile';

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth = authUser && userProfile.username === authUser.username;
  const visitingAnotherProfileAndAuth = authUser && userProfile.username !== authUser.username;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
      {/* Profile Picture */}
      <AvatarGroup size={{ base: 'xl', md: '2xl' }} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
        <Avatar src={userProfile.profilePicURL} alt={`${userProfile.fullname}'s profile picture`}></Avatar>
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        {/* Username & Edit Profile Button */}
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>{userProfile.username}</Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
              <Button
                bg={'white'}
                color={'black'}
                _hover={{ bg: 'whiteAlpha.800' }}
                size={{ base: 'xs', md: 'sm' }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
              <Button bg={'blue.500'} color={'white'} _hover={{ bg: 'blue.600' }} size={{ base: 'xs', md: 'sm' }}>
                Follow
              </Button>
            </Flex>
          )}
        </Flex>

        {/* Post, Followers, Following Line */}
        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight={'bold'} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight={'bold'} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight={'bold'} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>

        {/* Name Line */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'small'} fontWeight={'bold'}>
            {userProfile.fullName}
          </Text>
        </Flex>

        {/* Bio Line */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'small'}>{userProfile.bio}</Text>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
