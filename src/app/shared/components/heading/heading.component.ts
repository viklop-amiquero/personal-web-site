import { Component, Input } from '@angular/core'

@Component({
    selector: 'shared-heading',
    standalone: false,

    templateUrl: './heading.component.html',
    styleUrl: './heading.component.css',
})
export class HeadingComponent {
    @Input()
    public title = ''
}
