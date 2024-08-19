import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const TechNewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Função para buscar notícias
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tecnologia&language=pt&apiKey=fc1a2941dcc4436cb5f979d02baf1561'
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openLink(item.url)} style={styles.newsItem}>
            {item.urlToImage ? (
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.newsImage}
              />
            ) : null}
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 10,
    marginTop: 20,
  },
  newsItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  newsImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  newsDescription: {
    fontSize: 14,
    color: '#333',
  },
});

export default TechNewsComponent;
