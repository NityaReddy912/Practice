import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const CreateBlogScreen = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleCreateBlog = () => {
    // Handle create blog functionality
    console.log('Blog created!');
    console.log('Author:', author);
    console.log('Content:', content);
    console.log('Image URI:', imageUri);
  };

  const handleImageUpload = () => {
    // Handle image upload functionality
    console.log('Upload image');
    // Use an image picker library or implement your own image upload logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Author Name</Text>
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Enter author name"
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={[styles.input, styles.contentInput]}
        value={content}
        onChangeText={setContent}
        multiline
        placeholder="Enter blog content"
      />

      <TouchableOpacity onPress={handleImageUpload} style={styles.imageUploadButton}>
        <Text style={styles.imageUploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      ) : null}

      <TouchableOpacity onPress={handleCreateBlog} style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  contentInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  imageUploadButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  imageUploadButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
};

export default CreateBlogScreen;
