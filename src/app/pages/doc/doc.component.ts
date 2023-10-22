import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface DocContent {
  title: string;
  anchor: string;
  SubHeader: string;
  content: string;
}

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements OnInit {
  public mdContent = [{ title: '<h1 id="oi">oi</h1>' }];

  public docContent: DocContent[] = [
    {
      title: 'Como é feita o calculo do fora de limites',
      anchor: 'como-e-feita',
      SubHeader: 'E como é feita nas outras Wegs',
      content: 'Tudo comeca na hora de cagar',
    },
    {
      title: 'Quer ser um dev melhor?',
      anchor: 'dev-melhor',
      SubHeader: 'E como é feita nas outras Wegs',
      content: 'Tudo comeca na hora de cagar',
    },
  ];

  // navigateToAnchor(anchor: string): void {
  //   console.log('anchor', anchor);
  //   console.log(this.scroller.scrollToAnchor(anchor));
  //   this.scroller.scrollToAnchor('#'+anchor);

  //   // const element = document.querySelector('#' + anchor);
  //   // console.log('element anchor', element);
  //   // if (element) {
  //   //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   // }
  // }

  navigateToAnchor(anchor: string): void {
    console.log('anchor', anchor);

    const element = document.getElementById(anchor);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // const element = document.querySelector('#' + anchor);
    // console.log('element anchor', element);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
  }

  public sections = [
    {
      name: 'Introduction',
      children: [
        {
          name: 'Before You Submit a Pull Request',
          anchor: 'como-e-feita',
          selected: true,
        },
        {
          name: 'Run Local Verifications',
          anchor: 'dev-melhor',

          // use the generated ID
        },
      ],
    },
    {
      name: 'Installation',
      children: [
        {
          name: 'Pull Request',
          anchor: 'run-local-verifications', // same as the ID in the markdown
        },
        {
          name: 'How the e2e Tests Work',
          anchor: 'run-local-verifications',
        },
      ],
    },
  ];

  public opened: boolean = false;

  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {}

  onToggle() {
    this.opened = !this.opened;
  }
}
