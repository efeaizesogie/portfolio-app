// portfolio.component.ts
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('300ms', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class PortfolioComponent {
  projects = [
    {
      name: 'ReviewNest',
      description: `Reviewnest is a platform designed to empower small businesses without websites or applications to seamlessly 
      gather customer insights and leverage the power of customer opinions and reviews, in driving business growth,
       enhancing customer experiences and making data driven decisions.`,
      imageUrl: './../../assets/png/review.png',
      demoLink: 'https://review-nest-7w4m-git-master-efeaizesogie.vercel.app/',
      githubLink: 'https://github.com/efeaizesogie/Review-Nest',
    },
    {
      name: 'Propell',
      description: `A platform that simplify complex task, empowering you to achieve more with less effort. Unleash your productivity potential, streamline collaboration, and gain insights that drive success.`,
      imageUrl: './../../assets/png/propell.png',
       demoLink: 'https://propell-ten.vercel.app/',
      githubLink: 'https://github.com/efeaizesogie/Propell',
    },
    
  ];

}



