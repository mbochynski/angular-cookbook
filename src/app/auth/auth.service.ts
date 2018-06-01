import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, password: string) {
    console.log('creating user');
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => console.log('create user complete')
      )
      .catch(
        error => console.log(error)
      );
  }
}
