import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6E6FA', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mabel.jpeg')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Minhas Redes Sociais</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Image source={require('@/assets/images/logo.png')} style={styles.reactLinda} />
      </ThemedView>
      <ThemedView style={styles.aboutContainer}>
        <ThemedText style={styles.aboutTitle}>Sobre Mim</ThemedText>
        <ThemedText style={styles.aboutText}>
          Olá, meu nome é Maria Isabel. 
          Tenho 16 anos e atualmente estou no segundo ano do ensino médio integrado com técnico em informática para internet.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.select({ ios: 'Arial', android: 'Roboto' }),
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  stepContainer: {
    alignItems: 'center',
    marginVertical: 2       ,
  },
  reactLogo: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  reactLinda: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  aboutText: {
    fontSize: 16,
    textAlign:'justify',
    lineHeight: 24,
    color: '#555',
  },
});

