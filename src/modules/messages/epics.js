import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
// import { db } from '../../firebase';
import types from './types';


const sendMessageEpic = action$ =>
  action$.ofType(types.SEND_MESSAGE)
    .mergeMap(({ message }) =>
      Observable.fromPromise(Promise.resolve(message))
        .mergeMap(() => Observable.of({
          type: types.SEND_MESSAGE_SUCCESS,
          messageId: message.messageId,
        }))
        .catch(error => Observable.of({
          type: types.SEND_MESSAGE_FAILURE,
          error,
          messageId: message.messageId,
        })));

export default sendMessageEpic;

// db.collection('messages').doc(message.messageId).set(message);
