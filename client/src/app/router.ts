import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./components/contacts/contacts.component";
const routes: Routes = [
    {
        path:'',
        component:ContactsComponent
    }
]

export const router = RouterModule.forRoot(routes)