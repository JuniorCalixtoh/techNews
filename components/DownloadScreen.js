import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NewsContext } from '@/components/NewsContext';

const DownloadScreen = () => {
  const { downloadedArticles, removeArticle } = useContext(NewsContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={downloadedArticles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => removeArticle(item.url)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  article: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  deleteButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#ff4444',
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default DownloadScreen;
