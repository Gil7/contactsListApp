import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service'
import { Contact } from "./contact";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[]
  name:String 
  lastname:String
  phone:String
  constructor(private contactService:ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(
      contacts => this.contacts = contacts
    )
  }
  deleteContact(id){
    this.contactService.deleteContact(id).subscribe(
      data => {
        if(data.success){
          const size = this.contacts.length
          for(let i=0;i<size;i++){
            if(this.contacts[i]._id == id){
              this.contacts.splice(i,1)
            }
          }
        }
      }
    )
  }
  isValidForm(){
    if(this.name != "" && this.lastname != "" && this.phone != ""){
      return true
    }else{
      return false
    }
  }
  createContact(){
    
    const newContact = {
      name:this.name,
      lastname:this.lastname,
      phone:this.phone
    }
    this.contactService.addContact(newContact).subscribe(res => {
      if(res.success){
        this.contacts.push(res.contact)
        this.name = ""
        this.lastname = ""
        this.phone = ""
      }
    })
  
    
  }

}
