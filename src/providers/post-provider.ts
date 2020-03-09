//provider api

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
	server: string = "http://160.202.43.61:7878/mobile_api/index.php/quiz/"
	// server: string = "http://139.255.39.26:92/mobile_api/index.php/quiz/"
	// server: string = "http://192.168.1.20/mobile_api/index.php/quiz/"
	constructor(public http: Http) {

	}

	postData(body, file) {
		let type = "text/plain";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
			.map(res => res.json());
	}

}