import { Component } from '@angular/core'

@Component({
    selector: 'shared-header',
    standalone: false,

    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    public data = [
        {
            icon: 'fa-solid fa-building-columns',
            text: 'universidad nacional de san cristóbal de huamanga',
        },
        {
            icon: 'fa-solid fa-code',
            text: 'programador full stack',
        },
        {
            icon: 'fa-brands fa-whatsapp',
            text: '+51 934848514',
        },
        {
            icon: 'fa-solid fa-location-dot',
            text: 'ayacucho, perú',
        },
    ]

    public languages = [
        { name: 'Español (Nativo)', level: '100%', width: 'w-full' },
        { name: 'Inglés (Intermedio)', level: '42%', width: 'w-[42%]' },
        { name: 'Francés (Básico)', level: '5%', width: 'w-[5%]' },
    ]

    public socialIcons = [
        {
            icon: 'fa-brands fa-youtube',
            href: 'https://www.youtube.com/@viktorlopez7827',
        },
        {
            icon: 'fa-solid fa-envelope',
            href: '#',
        },
        {
            icon: 'fa-brands fa-github',
            href: 'https://github.com/viklop-amiquero',
        },
        {
            icon: 'fa-brands fa-linkedin-in',
            href: 'https://www.linkedin.com/in/viktor-lopez/',
        },
    ]
}
