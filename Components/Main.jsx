import {StyleSheet, Text, View, TouchableOpacity as TouchableOpcaity } from 'react-native';
import {useState} from 'react';


const Main = () => {

  const [num, setNum] = useState(15)

  const sayings = [
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
    {
        text: 'All that glitters is not gold',
        Meaning: 'Something might not be as valuable as it seems to be',
        Example: 'Radhika bought an attractive bracelet recently, but it broke in less than a week. All that glitters is not gold.'
    },
    {
        text: 'A picture is worth a thousand words',
        Meaning: 'Explaining something is easier through a picture than by words',
        Example: "It’s easier to learn from pictures than only text, since a picture is worth a thousand words."
    },
    {
        text: 'All good things come to an end',
        Meaning: 'Nothing great lasts forever',
        Example: 'It was a fantastic vacation, but all good things come to an end.'
    },
    {
        text: 'Beggars can’t be choosers',
        Meaning: 'People dependent on others must be content with what is offered to them',
        Example: "People who depend on the generosity of others can’t pick & choose things as per their liking. They’ve to accept what is given to them."
    },
    {
        text: 'A journey of a thousand miles begins with a single step',
        Meaning: 'It is necessary to take the first step to reach your goal',
        Example: "I feel overwhelmed with all the tasks I have to finish, but I have to start with something since a journey of a thousand miles begins with a single step."
    },
    {
        text: 'A bird in the hand is worth two in the bush',
        Meaning: 'What you have is better than what you might get',
        Example: "I think I’ll sell my car at the offered price instead of waiting for something higher. After all, a bird in hand is worth two in the bush."
    },
    {
        text: 'Actions speak louder than words',
        Meaning: "What someone does means more than what they say they will do",
        Example: 'She never bragged about her grades but secured the second position in the board exams. Truly, actions speak louder than words.'
    },
    {
        text: 'Better safe than sorry',
        Meaning: 'It is better to take precautions than to regret later',
        Example: "Don’t ride your bike without wearing a helmet. It is better to be safe than sorry."
    },
    {
        text: 'Appearances can be deceptive',
        Meaning: 'Something might be different from how they appear outwardly',
        Example: "Don’t trust people you are not familiar with; appearances can be deceptive."
    },
    {
        text: 'As you sow, so you shall reap',
        Meaning: 'Your actions determine your results',
        Example: "If you don’t go to sleep early, you will wake up late. As you sow, so shall you reap."
    },
    {
        text: 'Better late than never',
        Meaning: 'Getting something late is better than never getting it',
        Example: "we have been waiting for you for 3 hours, but okay, it’s better late than never."
    },
  ]
  
  return (
    <View style={styles.container} >
      <View style={styles.sayingBlock}>
        <View style={styles.sayingsContainer}> 
            <Text style={styles.saying}>{sayings[num]['text']}</Text>
            <Text style={styles.text}> Meaning: {sayings[num]['Meaning']} </Text>
            <Text style={styles.text}> Example: {sayings[num]['Example']} </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpcaity style={styles.button} onPress={() => {num == sayings.length ? setNum(0) : setNum(num - 1) }}>
            <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpcaity>
        <TouchableOpcaity style={styles.button} onPress={() => {num == sayings.length ? setNum(0) : setNum(num + 1) }}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpcaity>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo:{
    width:195, 
    height:195,
    marginBottom: 10
  },
  sayingsContainer:{
    // paddingVertical: 90,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 350,
  },
  saying: {
    color: '#353f32', 
    fontSize: 25,
    textDecorationLine: 'underline',
    // change font family
    fontFamily: 'sans-serif',
    fontWeight: 500,
    lineHeight: 34,
  },
  text:{
    fontSize: 20,
    padding: 20,
  },
  button: {
    backgroundColor: '#0a6a77',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 5
  },
  buttonText:{
    fontSize: 20,
    color: '#fff'
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row'
  }
})