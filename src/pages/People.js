import React from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import Participant from '../components/Participant';
import MenuBar from '../containers/MenuBar';
import TopMenu from '../containers/TopMenu';
import actions, { actionPropTypes } from '../actions';
import { getAsyncStorageItem } from '../helpers/common';

let idUser;
getAsyncStorageItem('idUser').then((res) => {
  idUser = res;
});

class People extends React.Component {
  static navigationOptions = navigationOptions('People');

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
    participant: PropTypes.arrayOf(PropTypes.shape({
      ID_USER: PropTypes.string.isRequired,
      USER_FIRSTNAME: PropTypes.string.isRequired,
      USER_NAME: PropTypes.string.isRequired,
      PROFILE_AVATAR: PropTypes.string.isRequired,
    })),
    // interested: PropTypes.arrayOf(PropTypes.shape({
    //   ID_USER: PropTypes.string.isRequired,
    //   USER_FIRSTNAME: PropTypes.string.isRequired,
    //   USER_NAME: PropTypes.string.isRequired,
    //   PROFILE_AVATAR: PropTypes.string.isRequired,
    // })),
    // participation: PropTypes.string.isRequired,
  };

  state = {
    // curEvent: {
    //   EVENT_DATE: '',
    //   EVENT_DESC: '',
    //   EVENT_NAME: '',
    //   ID_EVENT: '',
    //   ID_LOCATION: '',
    //   LOC_DISCTRICT: '',
    //   LOC_EVENT: '',
    //   LOC_LATITUDE: '',
    //   LOC_LONGITUDE: '',
    // },
  };

  static defaultProps = {
    events: [],
    participant: [],
    // interested: [],
  }

  componentWillMount() {
    const { idEvent, actions: { getStatusParticipationAction } } = this.props;
    if (this.findEvent()) {
      AsyncStorage.setItem('currentEvent', JSON.stringify(this.findEvent()));
    }
    getStatusParticipationAction(idEvent);
  }

  findEvent = () => {
    const { idEvent, events } = this.props;
    return events.find(event => event.ID_EVENT === idEvent);
  }

  onClick = conv => () => {
    const { actions: { currentConvAction, navigationAction } } = this.props;
    currentConvAction(conv);
    navigationAction('Conversation');
  }

  render() {
    const {
      participant,
    } = this.props;
    return (
      <View>
        <MenuBar />
        <TopMenu
          style={{
            position: 'absolute', right: 90, top: 60, bottom: 0, justifyContent: 'center', alignItems: 'center',
          }}
        />
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          {participant.event && participant.event.map(part => (
            idUser !== part.ID_USER && (
              <Participant
                profileAvatar={part.PROFILE_AVATAR}
                person={part.USER_NAME}
                onClick={this.onClick({ idUser: part.ID_USER, person: `${part.USER_FIRSTNAME} ${part.USER_NAME}` })}
              />
            )))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({
  idEvent,
  event: { data: { events } },
  participant,
  participation,
  // interested,
}) => ({
  idEvent,
  events,
  participant: participant.data,
  participation,
  // interested: interested.data,
});

export default connect(mapStateToProps, actions)(People);
