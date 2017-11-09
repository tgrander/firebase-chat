import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import messagesRef from './databaseRef';
import types from './types';


const messagesEpic = action$ =>
  action$.ofType(types.SEND_MESSAGE)
    .mergeMap(({ message }) =>
      Observable.fromPromise(messagesRef.doc(message.messageId).set(message)));
