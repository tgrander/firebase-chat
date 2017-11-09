import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { auth } from '../../firebase';
import types from './types';


const authEpic = action$ =>
  action$.ofType(types.SIGN_UP)
    .mergeMap(({ email, password }) =>
    // FIREBASE
      Observable.fromPromise(auth.createUserWithEmailAndPassword(email, password))
        .mergeMap(({ uid }) => Observable.of({ type: types.SIGN_UP_SUCCESS, uid }))
        .catch(error => Observable.of({ type: types.SIGN_UP_FAILURE, error })));

export default authEpic;
