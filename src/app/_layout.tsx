import { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded || fontError) {
        try {
          await SplashScreen.hideAsync().catch(() => { });
          // Mantém a splash visível por 1.5s para transição suave
          await new Promise((resolve) => setTimeout(resolve, 1500));
        } catch (error) {
          console.warn('Erro ao carregar splash screen:', error);
        } finally {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [fontsLoaded, fontError]);

  // Enquanto as fontes não carregarem ou o tempo não concluir, exibe a splash simples
  if (!appIsReady || (!fontsLoaded && !fontError)) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/image.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Schedule" />
      <Stack.Screen name="AppointmentDetails" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C123B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});
