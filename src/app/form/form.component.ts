import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  state:FormGroup;
  constructor() { }
  states = [
    { name: 'Alabama', region: 'South' },
    { name: 'Alaska', region: 'West' },
    { name: 'Arizona', region: 'West' },
    { name: 'Arkansas', region: 'South' },
    { name: 'California', region: 'West' },
    { name: 'Colorado', region: 'West' },
    { name: 'Connecticut', region: 'Northeast' },
    { name: 'Delaware', region: 'South' },
    { name: 'Florida', region: 'South' },
    {  name: 'Georgia', region: 'South' },
    {  name: 'Hawaii', region: 'West' },
    {  name: 'Idaho', region: 'West' },
    {  name: 'Illinois', region: 'Midwest' },
    {  name: 'Indiana', region: 'Midwest' },
    {  name: 'Iowa', region: 'Midwest' },
    {  name: 'Kansas', region: 'Midwest' },
    {  name: 'Kentucky', region: 'South' },
    {  name: 'Louisiana', region: 'South' },
    {  name: 'Maine', region: 'Northeast' },
    {  name: 'Maryland', region: 'South' },
    {  name: 'Massachusetts', region: 'Northeast' },
    {  name: 'Michigan', region: 'Midwest' },
    {  name: 'Minnesota', region: 'Midwest' },
    {  name: 'Mississippi', region: 'South' },
    {  name: 'Missouri', region: 'Midwest' },
    {  name: 'Montana', region: 'West' },
    {  name: 'Nebraska', region: 'Midwest' },
    {  name: 'Nevada', region: 'West' },
    {  name: 'New Hampshire', region: 'Northeast' },
    {  name: 'New Jersey', region: 'Northeast' },
    {  name: 'New Mexico', region: 'West' },
    {  name: 'New York', region: 'Northeast' },
    {  name: 'North Dakota', region: 'Midwest' },
    {  name: 'North Carolina', region: 'South' },
    {  name: 'Ohio', region: 'Midwest' },
    {  name: 'Oklahoma', region: 'South' },
    {  name: 'Oregon', region: 'West' },
    {  name: 'Pennsylvania', region: 'Northeast' },
    {  name: 'Rhode Island', region: 'Northeast' },
    {  name: 'South Carolina', region: 'South' },
    {  name: 'South Dakota', region: 'Midwest' },
    {  name: 'Tennessee', region: 'South' },
    {  name: 'Texas', region: 'South' },
    {  name: 'Utah', region: 'West' },
    {  name: 'Vermont', region: 'Northeast' },
    {  name: 'Virginia', region: 'South' },
    {  name: 'Washington', region: 'South' },
    {  name: 'West Virginia', region: 'South' },
    {  name: 'Wisconsin', region: 'Midwest' },
    {  name: 'Wyoming', region: 'West' }
  ];
  result:any;

  ngOnInit() {
    this.state=new FormGroup({
      name:new FormControl(''),
      region:new FormControl('')
    })
  }
  hello(){
    console.log(this.state.value)
    this.result=this.state.value
  }
  check(val:any){
    console.log(val)
  }

  onSelect($event){
    this.state.patchValue({'region':$event.item.region})
    
  }
}
