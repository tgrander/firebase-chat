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
      Observable.fromPromise(auth.createUserWithEmailAndPassword(email, password))
        .mergeMap((res) => {
          console.log('SIGN UP SUCCESS RESPONSE: ', res);
          return Observable.of({ type: types.SIGN_UP_SUCCESS });
        })
        .catch(error => Observable.of({ type: types.SIGN_UP_FAILURE, error })));


export default authEpic;
