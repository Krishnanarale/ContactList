import { Component, OnInit, OnDestroy } from '@angular/core';

import { Contact } from '../shared/contact.model';
import { WebService } from '../shared/web.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public contacts: Contact[] = [];

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.subscription = this.webService.contactsChange.subscribe(
      () => this.allContacts()
    )
    this.allContacts();
  }

  private allContacts() {
    this.subscription = this.webService.getAllContacts().subscribe(
      (contacts: Contact[]) => this.contacts = contacts
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
