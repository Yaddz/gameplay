import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Union.png')}
        style={styles.image}
        resizeMode="stretch"
      >
        <Image
          source={require('../../assets/images/leeSin.png')}
          style={styles.hero}
          resizeMode="contain"
        />

        {/* Degradê na base das imagens desvanecendo de baixo para cima */}
        <LinearGradient
          colors={['rgba(12, 18, 59, 0)', '#0C123B']}
          style={styles.gradient}
        />
      </ImageBackground>

      <View style={styles.content}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={{ fontSize: 15, color: '#DDE3F0', fontFamily: 'Rajdhani_500Medium', textAlign: 'center', lineHeight: 25, marginTop: 16 }}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => { alert('Imagine que você fez todo o passo a passo para logar com o Discord'); router.push('/Home') }}
        >

          <Image
            source={require('../../assets/images/Discord-Logo-White 1.png')}
            style={styles.icon}
          />

          <View style={styles.divider} />

          <Text style={{ fontSize: 18, color: '#FFF', fontFamily: 'Rajdhani_700Bold', marginLeft: 30, }}>
            Entrar com Discord
          </Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0C123B',
    paddingTop: 56,
  },
  image: {
    width: '100%',
    height: 360,
    paddingTop: 14.5,
    position: 'relative',
  },
  hero: {
    height: 297,
    width: 250,
    alignSelf: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  content: {
    marginTop: -55,
    paddingHorizontal: 58,
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Rajdhani_700Bold',
    color: '#DDE3F0',
    textAlign: 'center',
    lineHeight: 48,
  },
  icon: {
    height: 18,
    width: 24,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#E51C44',
    width: 274,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  divider: {
    backgroundColor: '#0c123b71',
    width: 1,
    height: '75%',
    marginLeft: 30,
  },
});