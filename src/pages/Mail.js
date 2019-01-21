import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../actions';
import navigationOptions from '../utils/navigationOptions';
import ConversationList from '../components/ConversationList';

class Mail extends React.Component {
  static navigationOptions = navigationOptions('Mail');

  static propTypes = {
    actions: actionPropTypes.isRequired,
    currentConv: PropTypes.shape({
      idUser: PropTypes.string.isRequired,
      person: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { actions: { getConversationsAction } } = this.props;
    getConversationsAction();
  }

  setActive = currentConv => () => {
    const { actions: { currentConvAction, navigationAction } } = this.props;
    currentConvAction(currentConv);
    navigationAction('Conversation');
  };

  getConversations = (props) => {
    const { conversations } = props;
    if (!conversations) return [];
    return Object.entries(conversations).map(([idUser, v]) => ({
      idUser,
      person: `${v.USER_FIRSTNAME} ${v.USER_NAME}`,
    }));
  };

  get conversations() {
    const conversations = this.getConversations(this.props);
    const { currentConv } = this.props;
    const convInArray = conversations.find(conv => conv.idUser === currentConv.idUser);
    if (!convInArray && currentConv.idUser !== '') {
      return [
        ...conversations,
        {
          idUser: currentConv.idUser,
          person: currentConv.person,
        },
      ];
    }
    return conversations;
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <ConversationList
        setActive={this.setActive}
        navigate={navigate}
        conversations={this.conversations}
      />
    );
  }
}

const mapStateToProps = ({
  conversation: { data: { conversations } },
  currentConv,
}) => ({
  conversations,
  currentConv,
});

export default connect(mapStateToProps, actions)(Mail);
