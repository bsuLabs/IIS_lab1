import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const routes = [{
  key: 'game',
  label: 'Try',
}, {
  key: 'knowledge',
  label: 'Knowledge base',
}];

const Footer = ({ activeRoute, onRouteChange }) => (
  <div className="fixed-bottom">
    <div className="list-group d-flex flex-row ">
      {routes.map(({ key, label }) => (
        <a
          href={`#${key}`}
          className={classNames('list-group-item', 'list-group-item-action', 'flex-fill', { active: key === activeRoute })}
          onClick={onRouteChange.bind(null, key)}
        >{label}
        </a>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  onRouteChange: PropTypes.func.isRequired,
};

export default Footer;
