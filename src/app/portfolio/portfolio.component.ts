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
    {
      name: 'Movie App',
      description: `This is a platform where you can get reviews for different movies and watch the trailer of the movie.`,
      imageUrl: './../../assets/png/movie-box.png',
      demoLink: 'https://movie-box-hazel-one.vercel.app/',
      githubLink: 'https://github.com/efeaizesogie/movie-box',
    },
    {
      name: 'Redrag',
      description: `A drag and drop gallery that let's user search for photos using their tags and change the arrangements of the images using drag and drop.`,
      imageUrl: './../../assets/png/redrag.png',
      demoLink: 'https://redrag.vercel.app/',
      githubLink: 'https://github.com/efeaizesogie/redrag',
    },
    {
      name: 'Todo App',
      description: `I built this app to help me keep track of my daily activities and also to help me learn the fundamentals of Angular.`,
      imageUrl: './../../assets/png/todo-app.png',
      demoLink: `https://todo-app-efeaizesogie.vercel.app/`,
      githubLink: 'https://github.com/efeaizesogie/Todo-app',
    },

  ];

}



