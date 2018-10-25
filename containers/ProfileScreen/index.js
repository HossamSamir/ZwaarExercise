
import React, { Component } from 'react';
import { Text,Image, ScrollView, TouchableOpacity,View, ActivityIndicator} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      user: null,
    }
  }
  componentWillMount() {
    this.fetchUser()
  }
  fetchUser = () => {
    fetch('https://reqres.in/api/users/4')
      .then((response) => response.json())
      .then((userRes) => this.setState({ user: userRes.data, fetching: false }))
      .catch((error) => {
        alert(error);
      });
  }
  render(){
    const { user } = this.state;
    if(this.state.fetching === false)
      return(
        <View style={styles.main}>
          <Image source={{ uri: user.avatar }} style={styles.imgContainer} />
          <ScrollView>
          <View style={styles.detailsView}>
            <Text style={styles.nameTxt}>{ `${user.first_name} ${user.last_name} (${user.id})` }</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ExamResultsScreen")} style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: 20 }}>
                <Image source={require('../../assets/icons/ic_add_user_gray.png')} style={styles.userCommentImage}/>
                <Text style={{ color: "#fff",  }}>Check your exam results</Text>  
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.setLoggedIn(false)} style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: 20 }}>
                <Image source={require('../../assets/icons/ic_add_user_gray.png')} style={styles.userCommentImage}/>
                <Text style={{ color: "#fff",  }}>Logout</Text>  
              </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      );
    else
        return <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center", justifyContent: "center" }}><ActivityIndicator size="large" color="#ff3333" /></View>
  }
}



const mapStateToProps = state => ({
  logged_in: state.login.logged_in,
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const { actions } = require('../../Redux/LoginRedux');
  return {
    ...ownProps,
    ...stateProps,
    setLoggedIn: logged_in => actions.setLoggedIn(dispatch, logged_in),
  };
}

export default connect(
  mapStateToProps,
  undefined,
  mergeProps,
)(ProfileScreen);
