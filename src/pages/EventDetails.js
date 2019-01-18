import React from 'react';
import { connect } from 'react-redux';
import {
  View,
}
  from 'react-native';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import BottomMenu from '../components/BottomMenu';
import EventsDescription from '../components/EventsDescription';
import actions from '../actions';


class EventDetails extends React.Component {
  static navigationOptions = navigationOptions('EventDetails');
  // console.log(this.props.navigation.state.params.event.ID_EVENT);

  static propTypes = {
    // actions: actionPropTypes.isRequired,
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
    })),
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
    // const { idEvent } = this.props;
    this.setState({ curEvent: this.findEvent() });
    // getStatusParticipationAction(idEvent);
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


  render() {
    const { navigation: { navigate } } = this.props;
    const { curEvent } = this.state;
    return (
      <View>
        <MenuBar
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 30, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <BottomMenu
          navigate={navigate}
          style={{
            position: 'absolute', right: 90, top: 60, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <EventsDescription
          titleEvent={curEvent.EVENT_NAME}
          dayDate={this.getDate(curEvent)}
          placeofevent={curEvent.LOC_DISTRICT}
          description={curEvent.EVENT_DESC}
        />
      </View>
    );
  }
}

const mapStateToProps = ({
  idEvent,
  event: { data: { events } },
  participant,
  participation,
}) => ({
  idEvent,
  events,
  participant: participant.data,
  participation,
});

export default connect(mapStateToProps, actions)(EventDetails);
