import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.save = this.save.bind(this);

  }

  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  }

  save(){
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
  const { course } = this.state;

    return(
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2> Add Course </h2>
        <input
           type="text"
           onChange={this.onTitleChange}
           value={course.title}
        />
       <input
         type="submit"
         onClick={this.save}
         value="Save"
       />

      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse : course => dispatch(courseActions.createCourse(course))
  }
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //si remuevo 'mapDispatchToProps' entonces, automaticamente se realia el dispatch
