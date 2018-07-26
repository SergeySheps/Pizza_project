import React from 'react';
import RegistrationForm from '../components/RegistrationForm'

const RegistrationPage = (props) => {
    return (
        <div className="registration">
            <main className="registration__content">
                <RegistrationForm onSubmit={(values) => alert(JSON.stringify(values, null, 2))} />
            </main>
        </div>
    )
}

export default RegistrationPage;