import { StyleSheet, Image, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const handleInsta = () => {
    Linking.openURL('https://www.instagram.com/b.mabellx/');
  };
  const handleTtk = () => {
    Linking.openURL('https://www.tiktok.com/@bmabell');
  };
  const handleWhats = () => {
    Linking.openURL('https://wa.me/18991442807');
  };
  const handleNum = () => {
    Linking.openURL('tel:+18991442807');
  };
  const handleEmail = () => {
    Linking.openURL('mailto:mariaisabelmbll5@gmail.com');
  };
  const handleLinkedin = () => {
    Linking.openURL('https://www.linkedin.com/in/mabellsilva');
  };
  const handleGit = () => {
    Linking.openURL('https://github.com/mabelsilva');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image source={require('@/assets/images/mabel.jpeg')} style={styles.headerImage} />}
    >
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}> @bmabell | @b.mabellx </ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleInsta}
        >
          <Image source={require('@/assets/images/insta.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>Instagram</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleTtk}
        >
          <Image source={require('@/assets/images/tiktok.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>TikTok</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleWhats}
        >
          <Image source={require('@/assets/images/whats.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>WhatsApp</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleEmail}
        >
          <Image source={require('@/assets/images/email.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>Email</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleNum}
        >
          <Image source={require('@/assets/images/tel.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>Telefone</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleLinkedin}
        >
          <Image source={require('@/assets/images/linkedin.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>LinkedIn</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.botoes, pressed && styles.botoesPressed]}
          onPress={handleGit}
        >
          <Image source={require('@/assets/images/github.png')} style={styles.icon} />
          <ThemedText style={styles.buttonText}>GitHub</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: -40,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: '#191970',
    borderWidth: 4,
    borderRadius: 100,
    marginVertical: 20,
    marginTop: -10,
  },
  buttonContainer: {
    alignItems: 'center',
    top: -50,
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#191970',
    padding: 10,
    borderRadius: 40,
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  botoesPressed: {
    backgroundColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});
