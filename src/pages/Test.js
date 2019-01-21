import React from 'react';
import { connect } from 'react-redux';
import {
  View, TouchableHighlight, ScrollView, AppRegistry, Image, TouchableOpacity,
  StyleSheet, Text,
}
  from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import PropTypes from 'prop-types';
import navigationOptions from '../utils/navigationOptions';
import MenuBar from '../components/MenuBar';
import Events from '../components/Events';
import actions, { actionPropTypes } from '../actions';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];



class Test extends React.Component {
  static navigationOptions = navigationOptions('Test');

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
        getInterestedEventAction,
      }, navigation: { navigate }
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
          <ModalDropdown style={styles.dropdown_1}
                           options={DEMO_OPTIONS_1}
            />
      </View>
    );
  }
}

const mapStateToProps = ({ event: { data: { events } } }) => ({ events });

export default connect(mapStateToProps, actions)(Test);


const styles = StyleSheet.create({
  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
});