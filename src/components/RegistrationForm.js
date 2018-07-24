import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions'

class RegisterForm extends Component {
    state = {
        user: {
            firstName: "",
            secondName: "",
            email: "",
            password: "",
            confirmedPassword: "",
            birthday: "",
            isEmployee: false
        },
        submitted: false,
        arePasswordsEqual: false,
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? (target.checked ? target.checked : false) : target.value;
        const name = target.name;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { onRegister } = this.props;

        if (user.confirmedPassword !== user.password) {
            this.setState({ arePasswordsEqual: false });
            return;
        }
        this.setState({
            arePasswordsEqual: true
        });

        if (user.firstName && user.secondName && user.email && user.password && user.confirmedPassword) {
            const { confirmedPassword, ...userWithoutConfirm } = user;
            onRegister(userWithoutConfirm);
        }
    }

    render() {
        const { isRegistrationInProgress, alert, hasBeenRegistered, onRegisterComplited } = this.props;
        const { user, submitted, arePasswordsEqual } = this.state;
        const datesOfRegister = {
            min: "1950-01-01",
            max: "2015-12-31"
        }

        if (hasBeenRegistered) {
            onRegisterComplited()
            return <Redirect to="/login" />;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" onChange={this.handleInputChange}
                            name="firstName" id="firstName" placeholder="Enter your first name" />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.secondName ? ' has-error' : '')}>
                        <label htmlFor="secondName">Second Name</label>
                        <input onChange={this.handleInputChange} type="text" className="form-control"
                            name="secondName" id="secondName" placeholder="Enter your second name" />
                        {submitted && !user.secondName &&
                            <div className="help-block">Second Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">Your Email</label>
                        <input onChange={this.handleInputChange} type="email" className="form-control"
                            name="email" id="email" placeholder="Enter your Email" />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }

                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleInputChange} type="password" className="form-control"
                            name="password" id="password" placeholder="Enter your Password" />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && (!user.confirmedPassword || !arePasswordsEqual) ? ' has-error' : '')}>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input onChange={this.handleInputChange} type="password"
                            className="form-control" name="confirmedPassword" id="confirm" placeholder="Confirm your Password" />
                        {submitted && !user.confirmedPassword &&
                            <div className="help-block">Verification is required</div>
                        }
                        {!arePasswordsEqual && submitted &&
                            <div className="help-block">Passwords are not the same</div>
                        }
                    </div>
                    <div className='form-group' >
                        <label htmlFor="birthday">Birthday</label>
                        <input onChange={this.handleInputChange} type="date" id="birthday" name="birthday" className="form-control"
                            min={datesOfRegister.min} max={datesOfRegister.max} />
                    </div>
                    <div className="form-group">
                        <div className="cols-sm-10">
                            <pre className="input-group">
                                <input onChange={this.handleInputChange} type="checkbox" id="isEmployee" name="isEmployee" />
                                <label htmlFor="isEmployee" className="cols-sm-2 control-label" value="false"> Are you our employee?</label>
                            </pre>
                        </div>
                    </div>
                    <div className="form-group">
                        {!isRegistrationInProgress && <button type="submit" className="btn btn-primary">Register</button>}
                        {isRegistrationInProgress &&
                            <img alt="loading..."
                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToprops = (state) => {
    const { isRegistrationInProgress, hasBeenRegistered } = state.registration;
    const { alert } = state;
    return {
        isRegistrationInProgress,
        hasBeenRegistered,
        alert
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (userWithoutConfirm) => dispatch(userActions.register(userWithoutConfirm)),
        onRegisterComplited: () => dispatch(userActions.registerComplited()),
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(RegisterForm);