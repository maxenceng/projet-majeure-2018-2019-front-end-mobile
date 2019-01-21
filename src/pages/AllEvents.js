import React from 'react';
import { connect } from 'react-redux';
import {
  View, TouchableHighlight, ScrollView,
}
  from 'react-native';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import Events from '../components/Events';
import actions, { actionPropTypes } from '../actions';

class AllEvents extends React.Component {
  static navigationOptions = navigationOptions('AllEvents');

  static propTypes = {
    actions: actionPropTypes.isRequired,
    events: PropTypes.instanceOf(Object).isRequired,
  };

  componentWillMount = () => {
    const { actions: { getAllEventsAction } } = this.props;
    getAllEventsAction({
      date: null,
      location: 'Lyon',
    });
  }

  handleOnEventSelected = idevent => () => {
    // console.log('yeahhhhhhhhhhh');
    // console.log(event.ID_EVENT);
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
      }, navigation: { navigate },
    } = this.props;
    currentEventAction(idevent);
    getParticipantEventAction({
      idEvent: idevent,
    });
    navigate('EventDetails');
  }

  getDate = (curEvent) => {
    const date = new Date(curEvent.EVENT_DATE * 1);
    const dateS = date.toString().split(' ');
    return `${dateS[1]} ${dateS[2]} ${dateS[3]}`;
  }

  render() {
    const { navigation: { navigate }, events } = this.props;
    return (
      <View>
        <MenuBar
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <ScrollView
          style={{
            marginTop: 60, width: 300, marginLeft: 30, height: 475, borderColor: 'black', borderWidth: 1,
          }}
        >
          {events && events.map(event => (
            <TouchableHighlight
              key={event.ID_EVENT}
              onPress={this.handleOnEventSelected(event.ID_EVENT)}
            >
              <Events
                day={this.getDate(event)}
                titleEvent={event.EVENT_NAME}
                dayDate=" "
                description={event.EVENT_DESC}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ event: { data: { events } } }) => ({ events });

export default connect(mapStateToProps, actions)(AllEvents);
