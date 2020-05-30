import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { WebService } from 'src/app/shared/web.service';
import { Contact } from 'src/app/shared/contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  public contact: Contact;
  private subscription: Subscription;
  private id: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private webService: WebService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.subscription = this.webService.getContact(this.id).subscribe(
      (contact: Contact[]) => this.contact = contact[0]
    )
  }

  onSubmit(contactForm) {
    let contact = contactForm.form.value;
    this.subscription = this.webService.updateContact(this.id, contact).subscribe(
      (result) => {
        this.router.navigate(['/contacts/' + this.id]);
      }
    )
  }

  onDelete() {
    this.subscription = this.webService.deleteContact(this.id).subscribe(
      (result) => this.router.navigate(['/contacts'])
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
