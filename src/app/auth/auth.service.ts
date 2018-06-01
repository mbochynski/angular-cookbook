import * as firebase from 'firebase';

export class AuthService {
  token: string;

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

  signinUser(email: string, password: string) {
    console.log('logging in');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (data) => {
          console.log('logged with data:', data)
          return firebase.auth().currentUser.getIdToken()
        }
      )
      .then((token) => {
        this.token = token;
      })
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }
}
