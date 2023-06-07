import { Image, StyleSheet, Text, View, TouchableOpacity as TouchableOpcaity } from 'react-native';
import {useEffect, useState} from 'react';
import logo from '../assets/logo.png';


const Main = () => {

  const [num, setNum] = useState(0)
  const [answer, setAnswer] = useState('');

  const facts = [
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
    {
        value: true,
        text: 'Mobile computing is the ability to do computing operations while on the move.'
    },
    {
        value: true,
        text: ' The first commercially available mobile phone, the Motorola DynaTAC 8000X, was released in 1983'
    },
    {
        value: false,
        text: 'The first smartphone was released by Apple and was called the iPhone 2G'
    },
    {
        value: true,
        text: 'Android is an open-source operating system for mobile devices developed by Google'
    },
    {
        value: true,
        text: 'The acronym "iOS" stands for "iPhone Operating System" '
    },
    {
        value: false,
        text: 'Mobile computing refers only to smartphones and tablets, excluding other portable devices like smartwatches'
    },
    {
        value: false,
        text: 'Mobile devices are incapable of using Wi-Fi for internet connectivity'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated in the early 2000s'
    },
    {
        value: true,
        text: 'Augmented reality (AR) and virtual reality (VR) technologies are commonly integrated into mobile applications'
    },
    {
        value: true,
        text: 'The Python programming language was named after the British comedy group Monty Python'
    },
    {
        value: false,
        text: 'The Internet was created in the 1990s'
    },
    {
        value: true,
        text: 'The concept of object-oriented programming (OOP) was first introduced in the language Smalltalk'
    },
    {
        value: false,
        text: 'The first computer virus was developed in the 1980s and was called "Brain."'
    },
    {
        value: true,
        text: 'The concept of the World Wide Web (WWW) was proposed by Tim Berners-Lee in 1989'
    },
    {
        value: true,
        text: 'The first general-purpose electronic computer, ENIAC, was completed in 1945'
    },
    {
        value: true,
        text: ' The programming language Java was initially called "Oak."'
    },
    {
        value: true,
        text: 'The first mobile application was created in 1997.'
    },
    {
        value: true,
        text: "The concept of mobile apps gained significant popularity with the launch of Apple's App Store in 2008."
    },
    {
        value: true,
        text: 'Mobile computing enables users to access information and services on the go through their portable devices.'
    },
    {
        value: true,
        text: 'Mobile operating systems like Android and iOS allow users to multitask and run multiple apps simultaneously.'
    },
    {
        value: true,
        text: 'Mobile computing has transformed various industries, such as e-commerce, social media, and mobile gaming'
    },
    {
        value: false,
        text: ' Mobile phones were first introduced to the market in the 1970s.'
    },
    {
        value: false,
        text: ' All mobile applications are developed using the Java programming language'
    },
    {
        value: false,
        text: ' The acronym "iOS" stands for "Internet Operating System."'
    },
    {
        value: false,
        text: ' 5G is the earliest generation of mobile network technology.'
    },
    {
        value: false,
        text: 'Mobile computing does not involve wearable devices like smartwatches.'
    },
    {
        value: true,
        text: 'Mobile devices use a variety of sensors, such as accelerometers and gyroscopes, to enable features like screen rotation and motion detection.'
    },
    {
        value: true,
        text: 'Mobile payment systems, such as Apple Pay and Google Pay, have gained popularity for making secure transactions using smartphones.'
    },
    {
        value: true,
        text: 'Mobile computing has enabled the rise of location-based services and navigation applications.'
    },
    {
        value: true,
        text: ' Mobile cloud computing allows users to store and access their data and applications from remote servers via the internet.'
    },
    {
        value: true,
        text: 'Mobile computing has revolutionized communication by providing instant messaging, video calling, and social networking platforms on portable devices.'
    },
    {
        value: false,
        text: 'Wi-Fi connectivity is not available on mobile devices.'
    },
    {
        value: false,
        text: 'Mobile computing is limited to smartphones and excludes tablets.'
    },
    {
        value: false,
        text: 'Mobile applications cannot integrate augmented reality or virtual reality technologies.'
    },
    {
        value: false,
        text: 'Mobile computing became popular in the 1990s with the introduction of PalmPilot devices.'
    },
    {
        value: false,
        text: 'The concept of mobile computing originated solely from advancements in cellular technology.'
    },
  ]

  const text = [
    {
        text: 'You are correct!'
    },
    {
        text: 'You are wrong :('
    }
  ]

  const handleTrueButtonPress = () => {
    if (facts[num].value === true) {
      setAnswer(text[0].text);
    } else {
      setAnswer(text[1].text);
    }

    setTimeout(() => {
      setAnswer('');
    }, 3000);
  };

  const handleFalseButtonPress = () => {
    if (facts[num].value === false) {
      setAnswer(text[0].text);
    } else {
      setAnswer(text[1].text);
    }

    setTimeout(() => {
      setAnswer('');
    }, 3000);
  };
  
  
  return (
    <View style={styles.container} >
      <View style={styles.factBlock}>
        <View style={styles.factsContainer}> 
            <Text style={styles.fact}>{facts[num]['text']}</Text>
        </View>
        <Text style={styles.answer}> {answer}</Text>
      </View>


      <view style={styles.buttonContainer}>
        <TouchableOpcaity style={styles.buttonFalse} onPress={handleFalseButtonPress}>
            <Text style={styles.buttonText}>False</Text>
        </TouchableOpcaity>
        <TouchableOpcaity style={styles.buttonTrue} onPress={handleTrueButtonPress}>
            <Text style={styles.buttonText}>True</Text>
        </TouchableOpcaity>
      </view>
      <TouchableOpcaity style={styles.button} onPress={() => {num == facts.length ? setNum(0) : setNum(num + 1) }}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpcaity>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f5ebe0',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo:{
    width:195, 
    height:195,
    marginBottom: 10
  },
  factsContainer:{
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'dashed',
    // paddingVertical: 90,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 350,
  },
  fact: {
    color: '#000000', 
    fontSize: 25,
    fontFamily: 'Cavolini',
    fontWeight: 500,
    lineHeight: 34,
  },
  button: {
    backgroundColor: '#f0a600',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    // marginTop: 100
  },
  buttonText:{
    fontSize: 20,
    color: '#fff'
  },
  buttonContainer:{
    display: 'flex',
    gap: 10,
  },
  buttonFalse: {
    backgroundColor: '#e63946',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTrue: {
    backgroundColor: '#38b000',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    // marginTop: 100
  },
  buttonText:{
    fontSize: 20,
    color: '#fff'
  },
  factBlock:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  answer:{
    fontSize: 20,
    fontWeight: 600
  },
})