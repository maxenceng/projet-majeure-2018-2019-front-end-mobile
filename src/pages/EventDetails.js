import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
}
  from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import BottomMenu from '../components/BottomMenu';
import actions, { actionPropTypes } from '../actions';
import { COLOR_SECONDARY, COLOR_TERCIARY } from '../helpers/common';
import Button from '../components/Button';

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
  buttons: {
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
});

class EventDetails extends React.Component {
  static navigationOptions = navigationOptions('EventDetails');
  // console.log(this.props.navigation.state.params.curEvent.ID_EVENT);

  static propTypes = {
    actions: actionPropTypes.isRequired,
    idEvent: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      EVENT_DATE: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_NAME: PropTypes.string.isRequired,
      ID_EVENT: PropTypes.string.isRequired,
      ID_LOCATION: PropTypes.string.isRequired,
      LOC_DISCTRICT: PropTypes.string.isRequired,
      LOC_EVENT: PropTypes.string.isRequired,
      LOC_LATITUDE: PropTypes.string.isRequired,
      LOC_LONGITUDE: PropTypes.string.isRequired,
      MEDIA_CONTENT: PropTypes.string.isRequired,
    })),
    participate: PropTypes.string.isRequired,
  };

  state = {
    curEvent: {
      EVENT_DATE: '',
      EVENT_DESC: '',
      EVENT_NAME: '',
      ID_EVENT: '',
      ID_LOCATION: '',
      LOC_DISCTRICT: '',
      LOC_EVENT: '',
      LOC_LATITUDE: '',
      LOC_LONGITUDE: '',
    },
  };

  static defaultProps = {
    events: [],
  }

  componentWillMount() {
    const { idEvent, actions: { getStatusParticipationAction } } = this.props;
    this.setState({ curEvent: this.findEvent() });
    getStatusParticipationAction(idEvent);
  }

  findEvent = () => {
    const { idEvent, events } = this.props;
    return events.find(event => event.ID_EVENT === idEvent);
  }

  getDate = (curEvent) => {
    const date = new Date(curEvent.EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  onClickParticipate = () => {
    const { idEvent, actions: { participateEventAction } } = this.props;
    participateEventAction(idEvent);
  }

  onClickUnParticipate = () => {
    const { idEvent, actions: { unParticipateEventAction } } = this.props;
    unParticipateEventAction(idEvent);
  }

  render() {
    const {
      navigation: { navigate },
      participate,
    } = this.props;
    const { curEvent } = this.state;
    return (
      <View>
        <MenuBar />
        <BottomMenu
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 60, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.text}>{curEvent.EVENT_NAME}</Title>
            <Paragraph style={styles.text}>
              {this.getDate(curEvent)}
            </Paragraph>
            <Paragraph style={styles.text}>
              {curEvent.LOC_DISTRICT}
            </Paragraph>
            <Paragraph style={styles.text}>
              {curEvent.EVENT_DESC}
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: curEvent.MEDIA_CONTENT }} />
        </Card>
        <View style={styles.buttons}>
          {participate !== 'participate' ? (
            <Button style={styles.button} onPress={this.onClickParticipate}>
              Participate
            </Button>
          ) : (
            <Button style={styles.button} onPress={this.onClickUnParticipate}>
              Unparticipate
            </Button>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({
  idEvent,
  event: { data: { events } },
  participant,
  participate: { data: participate },
}) => ({
  idEvent,
  events,
  participant: participant.data,
  participate,
});

export default connect(mapStateToProps, actions)(EventDetails);
