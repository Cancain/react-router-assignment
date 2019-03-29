import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    componentDidMount() {
        console.log(this.props);
    }

    courseClickHandler = (id, title) => {
        this.props.history.push({ pathname: '/courses/' + id + '/' + title });
    }

    render() {
        return (
            <div>

                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article
                                onClick={() => this.courseClickHandler(course.id, course.title)}
                                className="Course"
                                key={course.id} >
                                {course.title}
                            </article>;
                        })
                    }
                </section>
                <Route path={this.props.match.url + "/:id/:title"} component={Course} />
            </div>
        );
    }
}

export default Courses;