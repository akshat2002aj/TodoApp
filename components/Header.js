import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.subHeading}>Task Title</Text>
      <Text style={styles.mainContent}>NFT Web App Prototype</Text>
      <Text style={styles.subHeading}>Description</Text>
      <Text style={styles.description}>
        Last year was a fantastic year for NFTs, with the market reaching a $40
        billion valuation for the first time. In addition, more than $10 billion
        worth of NFTs are now sold every week – with NFT..
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 14,
    color: '#5D6B98',
    marginVertical: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
  mainContent: {
    fontSize: 20,
    color: '#1D2939',
    marginBottom: 3,
    fontWeight: '600',
    lineHeight: 30,
  },
  description: {
    fontSize: 14,
    color: '#111322',
    fontWeight: '500',
    lineHeight: 20,
  },
});
