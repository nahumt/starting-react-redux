import React, {Component, PropTypes} from 'react';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: "Crehana"}
    };
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    console.log('course', course);

    // const course = this.state.course;
    //course.title = event.target.value;
    // this.setState({ course })

    // console.log('course', course);
    // console.log('title', event.target.value);


  };

  render(){
  const { course } = this.state;

    return(
      <div>
        <h1> Courses </h1>
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
export default CoursesPage;
