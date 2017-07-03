import * as github from '../api/github/';

/* ACTIONS */
const FOLLOW_REPO = 'repo/follow/PUT';
const UNFOLLOW_REPO = 'repo/unfollow/PUT';

/* ACTION CREATORS */
export const followRepo = (payloads) => {
  return function(dispatch) {
    const { subscriptionUrl } = payloads.fullInfo;
    const { token } = payloads;
    return github.followRepo({ token, subscriptionUrl })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('API ERROR!!');
        console.error(error);
      });
  };
};

export const unfollowRepo = (payloads) => {
  return function(dispatch) {
    const { subscriptionUrl } = payloads.fullInfo;
    const { token } = payloads;
    return github.unfollowRepo({ token, subscriptionUrl })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('API ERROR!!');
        console.error(error);
      });
  };
};