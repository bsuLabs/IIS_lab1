import React from 'react';
import PropTypes from 'prop-types';

import { rules as initialRules } from 'data';

const Keyword = ({ label }) => (
  <div className="mx-1">
    <strong className="align-middle d-inline-block">{label}</strong>
  </div>
);
Keyword.propTypes = { label: PropTypes.string.isRequired };

const KeyValue = ({
  attr, value, showAnd, alt,
}) => (
  <div className="px-2 d-flex flex-row">
    <div className="input-group input-group-sm">
      <div className="input-group-prepend">
        <span className={`input-group-text text-${alt ? 'white' : 'dark'} bg-${alt ? 'success' : 'warning'} border-${alt ? 'success' : 'warning'}`}>{attr}</span>
      </div>
      <div className={`form-control text-white bg-dark border-dark`}>
        <span>{value}</span>
      </div>
    </div>
    {showAnd && (<Keyword label="AND" />)}
  </div>
);

KeyValue.propTypes = {
  attr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  showAnd: PropTypes.bool,
  alt: PropTypes.bool,
};

KeyValue.defaultProps = {
  showAnd: false,
  alt: false,
};

const KnowledgeBase = ({ rules }) => (
  <div>
    <ul>
      {rules.map(rule => (
        <li className="d-flex flex-row justify-content-between py-2" key={rule.id}>
          <span>#{rule.id}</span>
          <div className="d-flex flex-row justify-content-end">
            <Keyword label="IF" />
            {rule.if.map(({ attr, value }, index) => (
              <KeyValue
                key={attr}
                attr={attr}
                value={value}
                showAnd={index !== rule.if.length - 1}
              />
            ))}
            <Keyword label="THEN" />
            <KeyValue attr={rule.then.attr} value={rule.then.value} alt />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ruleType = PropTypes.shape({
  attr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

KnowledgeBase.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    if: PropTypes.arrayOf(ruleType.isRequired).isRequired,
    then: PropTypes.shape(ruleType.isRequired).isRequired,
  }).isRequired),
};

KnowledgeBase.defaultProps = { rules: initialRules };

export default KnowledgeBase;
