import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class ExamResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGrades: {
        subjects: ["English", "Math", "physics", "Accounting"],
        grades: [Math.floor(Math.random() * 100) + 0, Math.floor(Math.random() * 100) + 0, Math.floor(Math.random() * 100) + 0, Math.floor(Math.random() * 100) + 0 ]
      }
    }
  }
  renderSubjects = () => (
    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10, marginTop: 20, }}>
      {
        this.state.userGrades.subjects.map((item, i) => <Text style={{ flex: 1, fontWeight: "bold", padding: 5, borderColor: "grey", borderLeftWidth: i === 0 ? .5 : 0,  borderTopWidth: .5, borderRightWidth: .5 }} key={i}>{item}</Text>)
      }
    </View>
  )
  renderGrades = () => (
    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10,  }}>
      {
        this.state.userGrades.grades.map((item, i) => <Text style={{ flex: 1, fontWeight: "bold", padding: 5, color: "#ff3333", borderColor: "grey", borderLeftWidth: i === 0 ? .5 : 0, borderTopWidth: .5, borderBottomWidth: .5, borderRightWidth: .5 }} key={i}>{item}</Text>)
      }
    </View>
  )
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        {this.renderSubjects()}
        {this.renderGrades()}
      </View>
    )
  }
}