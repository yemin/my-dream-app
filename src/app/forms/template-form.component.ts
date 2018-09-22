import { Component, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Address } from './address.model';

@Component({
    templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
    //model = new Address('1441 Piikoi St', 'Honolulu', 'HI', 96822);
    model = Address;
    @ViewChild('f') form: any;

    states: string[] = [
        'HI',
        'NY',
        'TX',
        'FL',
        'CA',
    ];

    onSubmit() {
        if (this.form.valid) {
            console.log('Form Submitted!');
            this.form.reset();
        }
    }
}
