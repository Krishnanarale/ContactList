import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/shared/contact.model';
import { WebService } from 'src/app/shared/web.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  public contact: Contact;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm) {
    this.contact = contactForm.form.value;
    this.webService.addContact(this.contact).subscribe(
      (result) => {
        contactForm.reset()
      }
    )
  }

}
