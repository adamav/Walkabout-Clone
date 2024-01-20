import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Redirect } from 'expo-router';
import { useRouter } from 'expo-router';
import Label from 'components/Label';
import BackArrowBtn from 'components/BackArrowBtn/BackArrowBtn';
import SubHeaderLabel from 'components/SubHeaderLabel';
import Container from 'components/Container/Container';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const router = useRouter();


  useEffect(()=>{

    //not signed in redirect to landing

    router.replace('/landing')


  },[])



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{

        title:'',
        animation:'none',
        contentStyle:{
          paddingLeft:20,
          paddingRight:20,
          backgroundColor:'white',
         
          
         
        
          
        },
        headerLeft: (props) => <BackArrowBtn onPress={() => router.back()}/>,
        headerShadowVisible:false
        
      }}>

        <Stack.Screen name='landing' options={{

         
          headerShown:false,
          contentStyle:{

            padding:0,
           
            
          }

        }} />
        <Stack.Screen name='login' options={{

         
          headerTitle: () => <SubHeaderLabel text='Walkabout' style={{color:'#e12f85'}} />
         
          
        }} />
        <Stack.Screen name='sign-up' options={{

          headerTitle: () => <SubHeaderLabel text='Walkabout' style={{color:'#e12f85'}} />
        }}/>
        <Stack.Screen name='forgot-password' />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
