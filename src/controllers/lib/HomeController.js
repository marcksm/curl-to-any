import { Navigator, Extractor } from '../../helper';

export class HomeController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;

		this.handleChange = this.handleChange.bind(this);
		this.handleTranslate = this.handleTranslate.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		const value = e.target.value;
		this.callback({curl_input:value});
		this.handleTranslate(value);
	}
	handleTranslate(data) {
		const uri = Extractor.extractURI(data);
		const method = Extractor.extractMethod(data);
		this.callback({curl_output:data});
		console.log("uri", uri);
		console.log("method", method);
	}
}
