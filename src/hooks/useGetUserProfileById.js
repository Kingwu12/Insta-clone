import { useEffect, useState } from 'react';
import { firestore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';

const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userRef = await getDoc(doc(firestore, 'users', userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data());
        }
      } catch (error) {
        showToast('Error', error.message, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [showToast, setUserProfile, userId]);

  return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;
