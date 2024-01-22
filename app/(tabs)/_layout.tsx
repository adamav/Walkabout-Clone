
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { getLoginDetails } from 'store/reducers/account/account.selectors';
import { useRouter, useFocusEffect } from 'expo-router';

import Colors from '../../constants/Colors';
import BackArrowBtn from 'components/BackArrowBtn/BackArrowBtn';
import Label from 'components/Label';
import Container from 'components/Container/Container';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import Horizontal from 'components/Horizontal';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const router = useRouter();

  const {isLoggedIn} = useSelector(getLoginDetails);
  
  useFocusEffect(() =>{

    if(!isLoggedIn)
    router.replace('/landing')
  })


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerLeft: () => 
        
          <Container style={{

           
              backgroundColor:'#f3f7f8',
              borderRadius:200,
              padding:10,
             
           
          }}>

            <Label 
              text='15,000 Points' 
              style={{
               
                color:'#266acd',
                fontWeight:'bold',
                fontSize:10
              }} 
            />
            
          </Container>,


        headerTitle:(props) => <Label text='Walkabout' style={{

          color:'#e12f85',
          fontWeight:'bold',
          fontSize:20
        }}/>,

        headerRight:(props) =>{

          return (

            <Horizontal>
            <Container style={{
              backgroundColor:'#f3f7f8',
              padding:7,
              borderRadius:50,
              marginHorizontal:2,
            }}>

              <SimpleLineIcons 
              name='bell' 
              size={20} 
              />

             

            </Container>
            <Container style={{
                backgroundColor:'#4d3f96',
                padding:10,
                borderRadius:50,
                marginHorizontal:2,
              }}>

                <Label text='TT' style={{color:'black'}}/>

              </Container>
            </Horizontal>
           
          );
          
        },

        headerShadowVisible:false,

        
        

       

      

       
      
        
        
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={25}  />,
          
          
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color }) => <MaterialIcons name="support-agent" size={25} />,
          
        }}
      />

    <Tabs.Screen
        name="walkabout"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Container 
            style={{
              backgroundColor:'white',
              borderColor:'black',
              borderWidth:1,
              borderRadius:50,
              height:50,
              width:50,
              alignItems:'center',
              justifyContent:'center',
              top:-10
             
            }}>
              <Label 
              text='W' 
              style={{
                color:'#e12f85',
                fontWeight:'bold',
                fontSize:30,
               
                
                
              }}
              />
            </Container>,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={20} />,
        }}
      />

      <Tabs.Screen
        name="my-stuff"
        options={{
          title: 'My Stuff',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="safe" size={20} />,
        }}
      />
    </Tabs>
  );
}
