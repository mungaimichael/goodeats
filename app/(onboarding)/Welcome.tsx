import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React, { Children } from 'react'
import { Link } from 'expo-router'



const Welcome = () => {

  const { height, width } = Dimensions.get('window')
  return (
    <SafeAreaView
      style={styles.mainWrapper}
    >
      <View
        style={styles.imageWrapper}
      >
        <Image
          style={styles.imageOne}
          source={require(`../../assets/images/1.jpg`)} />
        <ImageWrapper
          top={-30}
        >
          <Image
            style={styles.image}
            source={require(`../../assets/images/2.jpg`)} />
      </ImageWrapper>
         
        <Image
          style={styles.image}
          source={require(`../../assets/images/3.jpg`)} />
        <Image
          style={styles.image}
          source={require(`../../assets/images/4.jpg`)} />

      </View>
      <Link
        href={'(onboarding)/Welcome2'}
      >
        Click Here
      </Link>
    </SafeAreaView>
  )
}

interface Props {
  children: React.ReactNode, 
  top:number
}
function ImageWrapper({children,top}:Props) {
  return <View
    style={[{
      width: 55,
      height: 55,
      padding: 35,
      backgroundColor: 'white',
      borderRadius: 120,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: top
    }]}
  >
    { children }
  </View>
}


const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white'

  },
  image: {
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 100, 
  },
  imageOne: {
    width: '70%', 
    height: '100%', 
    borderRadius:165
  },
  imageWrapper: {
    top:30,
    height: '40%', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center', 
    position:'relative'
  }
})

export default Welcome
