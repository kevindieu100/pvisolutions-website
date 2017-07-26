// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import { Link }       from 'react-router-dom';

class ContactSection extends PureComponent {
  static propTypes = {
    aboutModel:              PropTypes.object
  };

  static defaultProps  = {
    "team": [
        {
            "name": "Founder",
            "primaryContact": [
                {
                    "type": "Phone",
                    "value": "(123) 456 - 7890",
                    "icon": "icon alt fa-phone"
                },
                {
                    "type": "Email",
                    "value": "founder@gmail.com",
                    "icon": "icon alt fa-envelope"
                }
            ] 
        }
    ]
  };

  render() {
    const {
        aboutModel
    } = this.props;
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" defaultValue="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            {
                aboutModel.team.map(person => {
                    return (
                        <div>
                            <div className="contact-method">
                                <h2> { person.name } </h2>
                            </div>
                            {
                                person.primaryContact.map(contact => {
                                    return (
                                        <div className="contact-method">
                                            <span className= {contact.icon} />
                                            <h3>{contact.type}</h3>
                                            <span>{contact.value}</span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
          </section>
        </div>
     </section>
    );
  }
}

export default ContactSection;
