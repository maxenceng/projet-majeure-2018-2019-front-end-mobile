import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import navigationOptions from '../utils/navigationOptions';
import ConversationComponent from '../components/Conversation';
import actions, { actionPropTypes } from '../actions';
import Socket from '../helpers/socket';
import { getAsyncStorageItem } from '../helpers/common';

class Conversation extends React.Component {
  static navigationOptions = navigationOptions('Conversation');

  static propTypes = {
    actions: actionPropTypes.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      MES_CONTENT: PropTypes.string.isRequired,
      MES_AUTHOR: PropTypes.string.isRequired,
      MES_DATE: PropTypes.string.isRequired,
    })),
    currentConv: PropTypes.shape({
      idUser: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    messages: null,
  };

  socket = new Socket();

  componentWillMount() {
    const { currentConv: { idUser }, actions: { getMessagesAction } } = this.props;
    getMessagesAction(idUser);
    this.socket.on('sendMessage', (result) => {
      const { actions: { addMessageAction } } = this.props;
      if (!result.err) {
        getAsyncStorageItem('idUser')
          .then(MES_AUTHOR => addMessageAction({
            MES_AUTHOR,
            MES_CONTENT: result.data.message,
            MES_DATE: Date.now(),
          }));
      }
    });
    this.socket.on('message', (result) => {
      const { actions: { addMessageAction }, currentConv } = this.props;
      if (!result.err) {
        addMessageAction({
          MES_AUTHOR: currentConv.idUser,
          MES_CONTENT: result.message,
          MES_DATE: Date.now(),
        });
      }
    });
  }

  componentDidMount() {
    window.onbeforeunload = () => this.socket.emit('disconnect');
  }

  connect = async () => this.socket.emit('chatConnection', { idUser: await getAsyncStorageItem('idUser') });

  sendMessage = message => async () => {
    const { currentConv: { idUser: idDest } } = this.props;
    this.socket.emit('sendMessage', {
      message,
      exp: await getAsyncStorageItem('idUser'),
      idDest,
    });
  };


  render() {
    const { messages, currentConv: { idUser, person } } = this.props;
    return (
      <ConversationComponent
        messages={messages}
        person={person}
        currentIdUser={idUser}
        sendMessage={this.sendMessage}
      />
    );
  }
}

const mapStateToProps = ({
  message: { data: { messages } },
  currentConv,
}) => ({
  messages,
  currentConv,
});

export default connect(mapStateToProps, actions)(Conversation);
