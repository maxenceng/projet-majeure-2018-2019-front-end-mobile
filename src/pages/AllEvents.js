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
      location: { lng: 4.869803, lat: 45.784816 },
    });
  }

  handleOnEventSelected = idevent => () => {
    // console.log('yeahhhhhhhhhhh');
    // console.log(event.ID_EVENT);
    const { actions: { currentEventAction }, navigation: { navigate } } = this.props;
    currentEventAction(idevent);
    // getParticipantEvent({
    //  idEvent: idevent,
    // });
    navigate('EventDetails');
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
          <TouchableHighlight
            onPress={() => navigate('EventDetails')}
          >
            <Events day="day" titleEvent="title event" dayDate="Date" description="Description" />
          </TouchableHighlight>
          {events && events.map(event => (
            <TouchableHighlight
              key={event.ID_EVENT}
              onPress={this.handleOnEventSelected(event.ID_EVENT)}
            >
              <Events
                day={event.EVENT_DATE}
                titleEvent={event.EVENT_NAME}
                dayDate={event.EVENT_DATE}
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
