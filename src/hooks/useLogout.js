import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';
import userAuthStore from '../store/authStore';

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = userAuthStore((state) => state.logout);
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem('user-info');
      logoutUser();
    } catch (error) {
      showToast('Error signing out', error.message, 'error');
    }
  };

  return { handleLogout, isLoggingOut, error };
};

export default useLogout;
