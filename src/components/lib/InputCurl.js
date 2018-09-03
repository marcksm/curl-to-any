import React from 'react';

const InputCurl = (props) => {
	const { handleChange, value } = props;
	return (
		<div>
			<textarea
				value={value}
				id="curl-input"
				onChange={e => handleChange(e)}
				rows="4"
				cols="50">
			</textarea>
		</div>);
};

export { InputCurl };
