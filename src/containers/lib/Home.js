import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { HomeController } from '../../controllers';
import { Header, LanguageSwitcher, InputCurl, ResultCurl } from '../../components';

class Home extends Container {
	constructor(props) {
		super(props);

		this.state = {
			curl_input: '',
			curl_output: ''
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new HomeController(toController);
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate() {
	}
	render() {
		const { handleChange, handleTranslate } = this.controller;
		const { curl_input, curl_output } = this.state;
		return (
    	<div className='home'>
				<Header title="curl-to-any"/>
				<LanguageSwitcher/>
				<InputCurl
					value={curl_input}
					handleChange={handleChange}
				/>
				<ResultCurl
					value={curl_output}
				/>
			</div>
		);
	}
}

const mstp = state => {
	return {};
};

export default connect(mstp, {})(Home);
