import { Injectable } from '@angular/core'
import { Http, Headers } from "@angular/http"
import { Contact } from '../components/contacts/contact'
import 'rxjs/add/operator/map'
@Injectable()
export class ContactsService {
  contact:Contact
  constructor(private http:Http) { }

  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
    .map( res => res.json() )
  }
  addContact(contact){
    let headers = new Headers()
    headers.append('Content-type','application/json')

    return this.http.post('http://localhost:3000/api/contacts', contact, {headers:headers})
    .map(res => res.json())
  }
  deleteContact(id){
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.delete('http://localhost:3000/api/contacts/' + id,{headers:headers})
    .map( res => res.json())
  }
}
