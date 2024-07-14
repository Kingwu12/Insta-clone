import React from 'react';
import useShowToast from './useShowToast';

const usePreviewimg = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const showToast = useShowToast();
  const maxFileSizeBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeBytes) {
        showToast('Error', 'Image file size is too large. Please select an image file less than 2MB.', 'error');
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast('Error', 'Please select an image file.', 'error');
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewimg;
