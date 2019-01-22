import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../containers/MenuBar';
import { COLOR_TERCIARY, COLOR_SECONDARY } from '../helpers/common';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '70%',
    width: '70%',
  },
  card: {
    backgroundColor: COLOR_TERCIARY,
  },
  text: {
    color: COLOR_SECONDARY,
  },
});

export default class Eventpage extends React.Component {
  static navigationOptions = navigationOptions('Eventpage');

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <MenuBar />
        <View style={styles.container}>
          <View style={styles.content}>
            <Card style={styles.card} onPress={() => navigate('AllEvents')}>
              <Card.Content>
                <Title style={styles.text}>All Events</Title>
                <Paragraph style={styles.text}>All the good stuff, everywhere</Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.card} onPress={() => navigate('EventsForMe')}>
              <Card.Content>
                <Title style={styles.text}>Events For me</Title>
                <Paragraph style={styles.text}>Want something specific ?</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}
