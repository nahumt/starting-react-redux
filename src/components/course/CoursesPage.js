import React, {Component, PropTypes} from 'react';

class CoursesPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			course: {title: ''}
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onChangeTitle(e) {
		const {course} = this.state;
		course.title = e.target.value;
		this.setState({course});
	}
	onClickSave() {
		const {course} = this.state;
		alert(`course ${course.title}`);
	}

	render() {
		return (
			<div>
				<h1> Courses </h1>
				<h2>Add Couress</h2>
				<input
					type="text"
					value={this.state.course.title}
					onChange={this.onChangeTitle}
				/>
				<input value="Save" type="submit" onClick={this.onClickSave} />
			</div>
		);
	}
}
export default CoursesPage;
