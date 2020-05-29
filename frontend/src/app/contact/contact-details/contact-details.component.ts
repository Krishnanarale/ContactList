import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'src/app/shared/web.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public contacts: Contact[] = [];

  constructor( private route: ActivatedRoute, private router: Router, private webService: WebService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.webService.getContact(id).subscribe(
      (contact: Contact[]) => this.contacts = contact
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
