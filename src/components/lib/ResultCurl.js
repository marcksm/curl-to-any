import React from 'react';

const ResultCurl = (props) => {
	const { value } = props;
	return (
		<div>
			<textarea
				value={value}
				id="curl-output"
				rows="4"
				cols="50">
			</textarea>
		</div>);
};

export { ResultCurl };
