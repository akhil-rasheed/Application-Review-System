import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

const onSubmit = (values) => {
  console.log(values);
  axios
    .post("api/candidates/", values)

    .then((response) => {
      console.log(response);
    });
};

export default function CandidateForm() {
  return (
    <div>
      <p className="text-3xl my-12">Add a new candidate</p>

      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-entry">Name</label>
              <Field
                className="form-field"
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
              <Field
                className="form-field"
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <p className="text-xl font-extrabold">Contact details</p>

            <div className="form-group">
              <label className="form-entry">Email address</label>
              <Field
                className="form-field"
                name="email"
                component="input"
                type="text"
                placeholder="abc@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-entry">Phone number</label>
              <Field
                className="form-field"
                name="phone"
                component="input"
                type="text"
                placeholder="+91 2382736932"
              />
            </div>

            <div className="form-group">
              <label className="form-entry">Location</label>
              <Field name="location" component="select" className="form-field">
                <option />
                <option value="Bangalore">Bangalore</option>
                <option value="Indore">Indore</option>
                <option value="Mumbai">Mumbai</option>
              </Field>
            </div>

            <div className="form-group">
              <label className="form-entry">Position</label>
              <Field name="position" component="select" className="form-field">
                <option />
                <option value="SDE 1">Software Developer (Tier 1) </option>
                <option value="SDE 2">Software Developer (Tier 2)</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="Intern">Intern</option>
                <option value="Sales">Sales</option>
              </Field>
            </div>

            <div className="form-group">
              <label className="form-entry">Salary in LPA</label>
              <Field
                className="form-field"
                name="salary"
                component="input"
                type="number"
                placeholder=" "
              />
            </div>

            <div>
              <label className="form-entry">Education</label>
              <Field
                className="form-field"
                name="education"
                component="textarea"
                placeholder="Institution - Type of education"
              />
            </div>

            <div>
              <label className="form-entry">Skills</label>
              <Field
                className="form-field"
                name="skills"
                component="textarea"
                placeholder="Type each skill in a new line"
              />
            </div>

            <div>
              <label className="form-entry">Experience</label>
              <Field
                className="form-field"
                name="experience"
                component="textarea"
                placeholder=""
              />
            </div>

            <div className="buttons">
              <button
                type="submit"
                disabled={submitting || pristine}
                className="text-bold rounded-xl border-2 p-1 text-white  mx-2 hover:bg-transparent bg-green-400 "
              >
                Submit
              </button>
              <button
                type="button"
                className="text-bold rounded-xl border-2 p-1 text-white  mx-2 hover:bg-transparent bg-red-400"
                onClick={form.reset}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}