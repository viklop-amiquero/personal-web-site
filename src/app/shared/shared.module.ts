import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { HeadingComponent } from './components/heading/heading.component'

@NgModule({
    declarations: [HeaderComponent, HeadingComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, HeadingComponent],
})
export class SharedModule {}
