import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../containers/MenuBar';
import actions, { actionPropTypes } from '../actions';
import { COLOR_SECONDARY, COLOR_TERCIARY } from '../helpers/common';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '85%',
    width: '100%',
  },
  card: {
    backgroundColor: COLOR_TERCIARY,
    margin: 10,
  },
  text: {
    color: COLOR_SECONDARY,
    justifyContent: 'space-between',
  },
});

class AllEvents extends React.Component {
  static navigationOptions = navigationOptions('AllEvents');

  static propTypes = {
    actions: actionPropTypes.isRequired,
    events: PropTypes.instanceOf(Object).isRequired,
  };

  componentWillMount() {
    const { actions: { getAllEventsAction } } = this.props;
    getAllEventsAction({
      date: null,
      location: 'Lyon',
    });
  }

  handleOnEventSelected = idEvent => () => {
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
      }, navigation: { navigate },
    } = this.props;
    currentEventAction(idEvent);
    getParticipantEventAction({ idEvent });
    navigate('EventDetails');
  }

  getDate = (curEvent) => {
    const date = new Date(curEvent.EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  render() {
    const { events } = this.props;
    return (
      <View>
        <MenuBar />
        <View style={styles.container}>
          <View style={styles.content}>
            <ScrollView>
              {events && events.map(event => (
                <Card style={styles.card} onPress={this.handleOnEventSelected(event.ID_EVENT)}>
                  <Card.Content>
                    <Title style={styles.text}>{event.EVENT_NAME}</Title>
                    <Paragraph style={styles.text}>
                      {this.getDate(event)}
                    </Paragraph>
                    <Paragraph style={styles.text}>
                      {event.EVENT_DESC}
                    </Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: event.MEDIA_CONTENT }} />
                </Card>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ event: { data: { events } } }) => ({ events });

export default connect(mapStateToProps, actions)(AllEvents);
