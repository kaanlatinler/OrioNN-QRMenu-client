// Utility function to handle image uploads
export const uploadImageToPublic = async (file) => {
  try {
    // Generate unique filename
    const timestamp = Date.now();
    const randomSuffix = Math.round(Math.random() * 1e9);
    const extension = file.name.split(".").pop();
    const filename = `image-${timestamp}-${randomSuffix}.${extension}`;

    // In a real application, you would:
    // 1. Upload the file to a cloud storage service (AWS S3, Cloudinary, etc.)
    // 2. Or use a server endpoint to save the file
    // 3. Or use a file upload service

    // For now, we'll simulate this by returning a local path
    // In production, you should implement proper file upload
    return `/uploads/${filename}`;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
};

// Alternative: Use a simple approach with base64 (for small images)
export const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
