import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');

        return (
            <section className="section">
                <div className="container container--md">
                    {title && <h2 className="section__title align-center">{title}</h2>}
                    <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div className="sr-only">
                            <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                            <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                        </div>
                        <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                        <div className="form-group">
                            <label id="name-label" htmlFor="name">Nombre</label>
                            <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Su nombre" required />
                        </div>
                         <div className="form-group">
                            <label id="phone-label" htmlFor="phone">Móvil</label>
                            <input aria-labelledby="phone-label" type="tel" name="phone" id="phone" placeholder="Su número móvil" required />
                        </div>
                        <div className="form-group">
                            <label id="email-label" htmlFor="email">Correo electrónico</label>
                            <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Su correo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Motivo del contacto</label>
                            <div className="form-select-wrap">
                                <select name="subject" id="subject">
                                    <option value="">Seleccione</option>
                                    <option value="Cotizacion">Solicitud de contización</option>
                                    <option value="Garantia">Solicitud de Garantía</option>
                                    <option value="Otro">Otros</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label id="message-label" htmlFor="message">Mensaje</label>
                            <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Su mensaje" />
                        </div>
                        <div className="form-group form-checkbox">
                            <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                            <label id="consent-label" htmlFor="consent">Entiendo que la información que envío se almacena únicamente para propósitos de contacto.</label>
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="button">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
