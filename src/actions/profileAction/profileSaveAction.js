import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';

export const PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
export const profileSaving = createAction(PROFILE_SAVE_SUCCESS);

export default ({
  description,
  linkPicture,
  firstname,
  lastname,
  tags,
}) => (dispatch) => {
  dispatch(profileSaving());
  const tagsArray = tags.split(' ');
  return axios.post('updateProfile', {
    idUser: '324486b1-ed95-43ab-9117-b7b7b9641dc8',
    tagsArray,
    description,
    linkPicture,
    firstname,
    lastname,
  })
    .then((res) => {
      console.log(res.data);
    });
};
