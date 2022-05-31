import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('delivery');

  const handleClickButton = (id) => {
    setActiveTab(id);
  }

  return (
    <View style={tabsStyles.wrapper}>
      <HeaderButton
        id='delivery'
        text='Delivery'
        isActive={activeTab === 'delivery'}
        handleClick={handleClickButton}
      />
      <HeaderButton
        id='pickup'
        text='Pickup'
        isActive={activeTab === 'pickup'}
        handleClick={handleClickButton}
      />
    </View>
  )
}
// HeaderTabs styles
const tabsStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});


const HeaderButton = ({ id, text, isActive, handleClick }) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.headerButton, isActive && buttonStyles.activeButton]}
      onPress={() => handleClick(id)}
    >
      <Text style={[buttonStyles.headerButtonText, isActive && buttonStyles.activeText]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

// HeaderButton styles
const buttonStyles = StyleSheet.create({
  headerButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 24,
  },
  headerButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
  // active
  activeButton: {
    backgroundColor: '#000',
  },
  activeText: {
    color: '#FFF',
  },
});
