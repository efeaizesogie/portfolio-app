// about-me.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  // Add your personal details, skills, and experiences here
  name = 'Your Name';
  bio = `I am a passionate frontend developer with expertise in Angular and React. 
  I love creating web applications that provide great user experiences. In my free time, 
  I enjoy singing and playing musical instruments.`;
  skills = ['./../../assets/svg/icons8-html.svg', './../../assets/svg/icons8-css.svg', './../../assets/svg/icons8-javascript.svg', './../../assets/svg/icons8-angularjs.svg', './../../assets/svg/icons8-react.svg'];
  // Add more details as needed
}
