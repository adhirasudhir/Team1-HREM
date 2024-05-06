import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(contactForm: NgForm): void { // Modify to accept NgForm
    this.http.put<any>('http://localhost:3000/api/contact', this.formData)
      .subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          // Reset form after successful submission
          contactForm.resetForm();
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
  }
}