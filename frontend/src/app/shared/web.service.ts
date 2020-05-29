import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({ providedIn: "root" })
export class WebService {

    constructor(private http: HttpClient){}

    getAllContacts() {
        return this.http.get('http://localhost:3000/api/contacts');
    }

    getContact(id) {
        return this.http.get('http://localhost:3000/api/contact/' + id);
    }

}