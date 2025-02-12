import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css',
})
export class AppComponent {
    titleAbout = 'sobre mi'
    titleTech = 'tecnologías'
    titleExperience = 'experiencia'
    titleProyects = 'proyectos'
    titleUniversity = 'formación'
    titleExtra = 'extra'
    titleCourses = 'cursos'

    public date = new Date()

    public tech = [
        { icon: 'fa-brands fa-js', tech: 'JavaScript', level: 60 },
        { icon: 'fa-brands fa-python', tech: 'Python', level: 50 },
        { icon: 'fa-brands fa-php', tech: 'PHP', level: 60 },
        { icon: 'fa-brands fa-laravel', tech: 'Laravel', level: 70 },
        { icon: 'fa-brands fa-angular', tech: 'Angular', level: 55 },
    ]

    // public tech = [
    //     {
    //         icon: 'fa-brands fa-js',
    //         tech: 'JavaScript',
    //     },
    //     {
    //         icon: 'fa-brands fa-python',
    //         tech: 'Python',
    //     },
    //     {
    //         icon: 'fa-brands fa-php',
    //         tech: 'PHP',
    //     },
    //     {
    //         icon: 'fa-brands fa-laravel',
    //         tech: 'Laravel',
    //     },
    //     {
    //         icon: 'fa-brands fa-angular',
    //         tech: 'Angular',
    //     },
    // ]

    public experience = [
        {
            institucion: 'hospital regional de ayacucho',
            job: 'Programador full stack',
            description:
                'Desarrollo de aplicaciones frontend y backend utilizando Angular y .NET con SQL Server, Mantenimiento y optimización de sistemas internos desarrollados con PHP, HTML, CSS y  JQuery',
            year: 'Mayo - setiembre 2023',
            tech: [
                { name: 'C#' },
                { name: 'PHP' },
                { name: '.Net' },
                { name: 'Angular' },
                { name: 'SQL Server' },
            ],
        },
        {
            institucion: 'rapidiario señor cautivo',
            job: 'Freelancer - Programador full stack',
            description:
                'Plataforma para administrar cuentas de ahorro y préstamos con cálculo de intereses, historial de transacciones y reportes financieros',
            tech: [
                { name: 'C#' },
                { name: '.Net' },
                { name: 'Angular' },
                { name: 'SQL Server' },
            ],
            year: 'Febrero - mayo 2024',
        },
        {
            institucion: 'Corporación Educativa Sofia Ayacucho SRL',
            job: 'Freelancer - Programador full stack',
            description:
                'Desarrollo de un sistema web para gestionar matrículas y pagos en una academia preuniversitaria. Incluye módulos de control de usuarios, roles, pensiones',
            tech: [
                { name: 'Laravel' },
                { name: 'Livewire' },
                { name: 'Tailwind Css' },
                { name: 'MySQL' },
            ],
            year: 'Abril - julio 2024',
        },
    ]

    public proyects = [
        {
            title: 'visualizador interactivo de estructura de datos',
            year: '2019',
            description:
                'Desarrollé una app educativo en Python para visualizar estructuras de datos (conjuntos, matrices, listas, colas, pilas, árboles y grafos.) con interfaces gráficas. Creado como proyecto universitario, facilita el aprendizaje interactivo.',
            tech: [
                {
                    language: 'Python',
                    icon: 'fa-brands fa-python',
                },
            ],
            img: './estructura-datos.png',
        },
        {
            title: 'sistema de ventas',
            year: '2020',
            description:
                'Desarrollé una app escrita en Java con interfaz gráfica utilizando Java Swing, esta aplicación tiene las funcionalidades de registrar productos, proveedores, ventas y almacen. Fue parte de un proyecto universitario del curso Sistemas de Información.',
            tech: [
                {
                    language: 'Java',
                    icon: 'fa-brands fa-java',
                },
                {
                    language: 'PostgreSQL',
                    icon: 'fa-solid fa-database',
                },
            ],
            img: './sistema-ventas.png',
        },
    ]

    public studies = [
        {
            name: 'universidad nacional de san cristóbal de huamanga',
            target: 'bachiller en ingeniería de sistemas',
            date: '2017 - 2022',
        },
        // {
        //     name: 'curso especializado en desarrollo web',
        //     target: 'capacitación en Angular y Laravel',
        //     date: '2023',
        // },
    ]

    public courses = [
        {
            title: 'CSS: CSS Grid - Flex Box',
            issuer: 'Udemy',
            date: 'Abril 2023',
        },
        {
            title: 'Laravel',
            issuer: 'Udemy',
            date: 'Noviembre 2022',
        },
        {
            title: 'Angular',
            issuer: 'Udemy',
            date: 'Febrero 2025',
        },
    ]

    public publications = [
        {
            title: 'Numpy',
            icon: 'fa-brands fa-python',
            description:
                'Aprende la librería más poderosa de Python para cálculos numéricos con teoría y ejercicios prácticos. Ideal para ciencia de datos y análisis estadístico.',
            link: 'https://www.youtube.com/playlist?list=PLOqEZRFky4ZLsRmA3QTfLHjnol73tVKLS',
        },
        {
            title: 'Laravel',
            icon: 'fa-brands fa-laravel',
            description:
                'Encuentra respuestas rápidas y efectivas a los errores más comunes en Laravel. Aprende con casos reales y explicaciones claras para mejorar tu código.',
            link: 'https://www.youtube.com/playlist?list=PLOqEZRFky4ZLEslJUQRwX4JCQ5CVc_bxi',
        },
        {
            title: 'Metodología ICONIX',
            icon: 'fa-solid fa-list-check',
            description:
                'Descubre paso a paso cómo aplicar la metodología ICONIX con Enterprise Architect. Aprende a modelar software de manera efectiva y profesional.',
            link: 'https://youtu.be/fh_Ubmcfhks',
        },
    ]
}
