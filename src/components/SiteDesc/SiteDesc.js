import './SireDesc.css';

export const SiteDesc = () => {
    return (
        <>
            <hr className="mt-5" style={{borderTop: '3px solid #9f9f9f'}}/>
            <div className="row justify-content-between">
                <div className="col-md-6 col-sm-6">
                    <h3 className="site-deck-title">ABOUT ME</h3>
                    <p className="site-deck-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                        dignissimos distinctio, doloremque ea esse exercitationem minima minus nisi odio placeat quam
                        quibusdam quidem sequi tempora.
                    </p>
                    <p className="site-deck-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        corporis culpa debitis explicabo in itaque nisi perspiciatis unde voluptatibus voluptatum! Atque
                        blanditiis dolores eaque, et facilis iure provident suscipit veniam.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/" className="site-deck-icon">
                                <i className="fab fa-facebook">
                                </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="site-deck-icon">
                                <i className="fab fa-youtube">
                                </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="site-deck-icon">
                                <i className="fab fa-twitter">
                                </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="site-deck-icon">
                                <i className="fab fa-instagram">
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6">
                    <h3 className="site-deck-title">KEEP IN TOUCH</h3>
                    <ul className="list-unstyled site-deck-text">
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt">
                                    </i> Address:
                                </strong> Lviv, Ukraine
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-map-marker-alt">
                                    </i> Phone:
                                </strong> +3 8(098) 000 00 00
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>
                                    <i className="fas fa-envelope">
                                    </i> Email:
                                </strong> info@infomail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};