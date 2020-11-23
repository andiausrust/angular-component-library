import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {OthersDocumentationComponent} from '../../others-documentation/others-documentation.component';

@Injectable({
    providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<OthersDocumentationComponent> {

    canDeactivate(component: OthersDocumentationComponent): boolean {
        if (component.form.dirty) {
            return confirm('Your form is dirty. Are you sure you want to leave');
        }
        return true;
    }

}
