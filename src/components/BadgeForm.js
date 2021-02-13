import React from 'react';

class BadgeForm extends React.Component {
  //   state = {};

  //   handleChange = (e) => {
  //     //  console.log({
  //     //    name: e.target.name,
  //     //    value: e.target.value,
  //     //  });

  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  handleClick = (e) => {
    console.log('Botton was click');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          {/*form-group da estilos a una etiqueta y a una caja de texto*/}
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              avatarUrl=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />

            <div className="form-group">
              <label htmlFor="">Twitter</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                value={this.props.formValues.twitter}
              />
            </div>
          </div>
          {/*El valor de <button> en un <form> por omisión es submit lo cual
         enviara y recargara toda la pagina */}
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
