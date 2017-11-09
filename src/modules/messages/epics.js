import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { fetchMessagesSuccess } from './actions';
import messagesRef from './databaseRef';
import types from './types';


export const sendMessageEpic = action$ =>
  action$.ofType(types.SEND_MESSAGE)
    .mergeMap(({ message }) =>
      Observable.fromPromise(messagesRef.doc(message.messageId).set(message))
        .mergeMap(() => Observable.of({
          type: types.SEND_MESSAGE_SUCCESS,
          messageId: message.messageId,
        }))
        .catch(error => Observable.of({
          type: types.SEND_MESSAGE_FAILURE,
          error,
          messageId: message.messageId,
        })));

export const fetchMessagesEpic = action$ =>
  action$.ofType(types.FETCH_MESSAGES)
    .mergeMap(() =>
      Observable.of(messagesRef.onSnapshot((querySnapshot) => {
        console.log(querySnapshot);
        return querySnapshot;
      }))
        .mergeMap((querySnapshot) => {
          console.log('2', querySnapshot);
          return Observable.of(fetchMessagesSuccess(querySnapshot));
        })
        .catch(error => Observable.of({ type: types.FETCH_MESSAGES_FAILURE, error })));
