import { apolloClient } from 'utils/apolloClient';
import gql from 'graphql-tag';
import { mainStore } from 'stores';

export const get = async () => {
  const { data, errors } = await apolloClient.query({
    query: gql`
      query getRooms {
        getRooms {
          id
          name
          title
          avatar
          usersCount
          guestsCount
        }
      }
    `   
  });

  if (errors) {
    mainStore.status = 'error';
    return console.error(errors);
  }
  
  mainStore.rooms = data.getRooms;
  mainStore.status = 'ready';
}