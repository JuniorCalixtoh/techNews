import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tecnologia&language=pt&apiKey=fc1a2941dcc4436cb5f979d02baf1561'
        );
        const data = await response.json();
        
        // Filtrando artigos duplicados com base na URL
        const uniqueArticles = data.articles.reduce((acc, current) => {
          const x = acc.find(item => item.url === current.url);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setNews(uniqueArticles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url} // Usando a URL do artigo como chave
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { article: item })}
            style={styles.newsItem}
          >
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
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AADDEE', // Cor de fundo do projeto
    padding: 16,
    marginTop: 20,
  },
  newsItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  newsImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
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

export default HomeScreen;
