export class Extractor {
	static extractData(request) {

	}
	static extractURI(request) {
		var re = /((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?/;
		return request.match(re)[0];
	}
	static extractMethod(request) {
		var re = /( POST )|( PUT )|( DELETE )|( GET )|( post )|( put )|( delete )|( get )/;
		return (request.match(re)[0].replace(/\s/g,'')).toLowerCase();
	}
	static extractHeader(request) {

	}
	static extractAuth(request) {

	}
}
