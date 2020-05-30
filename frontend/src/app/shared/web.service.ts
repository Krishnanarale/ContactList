import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class WebService {

    public contactsChange = new Subject<void>();

    constructor(private http: HttpClient){}

    getAllContacts() {
        return this.http.get('http://localhost:3000/api/contacts');
    }

    getContact(id) {
        return this.http.get('http://localhost:3000/api/contact/' + id);
    }

    addContact(contact: Contact) {
        return this.http.post('http://localhost:3000/api/addContact', contact)
        .pipe(
            tap(() => {
                this.contactsChange.next()
            })
        );
    }

    updateContact(id:string, contact: Contact) {
        return this.http.patch('http://localhost:3000/api/updateContact/' + id, contact)
        .pipe(
            tap(() => {
                this.contactsChange.next()
            })
        )
    }

    deleteContact(id: string) {
        return this.http.delete('http://localhost:3000/api/deleteContact/' + id)
        .pipe(
            tap(() => {
                this.contactsChange.next()
            })
        )
    }

}