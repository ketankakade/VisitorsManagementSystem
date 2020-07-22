import React, { Fragment } from 'react';

export default function FormField(props) {
  let {
    label,
    value,
    errorMessage,
    type,
    linkLabel,
    className,
    placeholder,
    id,
    highlightOnError,
    isMandatory,
    mandatoryText,
    maxLength,
    linkId
  } = props;
  return (
    <Fragment>
      <div className={`form-field ${className ? className : ''}`}>
        <div className='label-link'>
          <p className='label'>{label}
            {
              (isMandatory) && 
              <span>*</span>
            }
            {
              mandatoryText &&
              <span className='mandatory-text'> - required</span>
            }
          </p>
          {
            (linkLabel) &&
              <a id={linkId} className='link' href='javascript:;' onClick={props.onLinkClicked}>{linkLabel}</a>
          }
        </div>
        {
          !props.children ?
            <input onPaste={props.onPaste} autoComplete='default' maxLength={maxLength} onKeyPress={props.onKeyPress} className={`${(highlightOnError && errorMessage)? 'error-input' : ''}`} id={id} placeholder={placeholder} value={value} type={type || 'text'} onChange={props.onChange}/>
            : props.children
        }
        {
          (errorMessage) &&
          <p className='error-message'>{errorMessage}</p>
        }
      </div>
    </Fragment>
  );
}