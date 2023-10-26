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
      title: 'Introduction',
      anchor: 'introduction',
      SubHeader: 'Overview of Our Application',
      content:
        '<p>Our application is designed to provide a seamless user experience for managing tasks and projects. It allows users to:</p>' +
        '<ul>' +
        '<li>Create and manage tasks</li>' +
        '<li>Collaborate with team members</li>' +
        '<li>Track progress and deadlines</li>' +
        '<li>Generate reports for analysis</li>' +
        '</ul>',
    },
    {
      title: 'Getting Started',
      anchor: 'getting-started',
      SubHeader: 'Setting Up Your Account',
      content:
        '<p>To start using our application, you need to:</p>' +
        '<ol>' +
        '<li>Sign up for an account</li>' +
        '<li>Verify your email address</li>' +
        '<li>Complete your profile setup</li>' +
        '</ol>' +
        '<p>Once set up, you can start creating projects and tasks.</p>',
    },
    {
      title: 'Features',
      anchor: 'features',
      SubHeader: 'Exploring Core Functionalities',
      content:
        '<p>Our application offers a wide range of features:</p>' +
        '<ul>' +
        '<li>Task Management: Create, assign, and track tasks.</li>' +
        '<li>Collaboration: Share files, chat with team members, and manage permissions.</li>' +
        '<li>Reporting: Generate custom reports to analyze progress.</li>' +
        '</ul>',
    },
    {
      title: 'Security',
      anchor: 'security',
      SubHeader: 'Protecting Your Data',
      content:
        '<p>We prioritize the security of your data:</p>' +
        '<ul>' +
        '<li>Encryption: All data transmitted to and from our application is encrypted using strong encryption algorithms.</li>' +
        '<li>Authentication: We employ robust authentication mechanisms to ensure only authorized users access the system.</li>' +
        '</ul>',
    },
    {
      title: 'Support',
      anchor: 'support',
      SubHeader: 'Getting Help',
      content:
        '<p>If you need help or have questions:</p>' +
        '<ul>' +
        '<li>Contact our support team via email or phone.</li>' +
        '<li>Visit our FAQ section for quick answers to common questions.</li>' +
        '</ul>',
    },
    {
      title: 'Como é feita o calculo do fora de limites',
      anchor: 'como-e-feita',
      SubHeader: 'E como é feita nas outras Wegs',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia facilisis pellentesque. Fusce maximus nulla eu finibus pellentesque. Donec congue lectus risus, id ullamcorper diam consectetur non. Aenean lobortis facilisis efficitur. Maecenas blandit cursus lorem, eu pretium arcu hendrerit vel. Suspendisse dignissim ornare finibus. Proin lacinia hendrerit <pre>2323</pre>  dolor non vulputate. In sollicitudin metus ac tortor malesuada, eget egestas massa facilisis. Ut eu tincidunt velit. Mauris ut auctor risus, ultrices molestie neque. Suspendisse dictum urna eget elit vulputate hendrerit.`,
    },
    {
      title: 'Quer ser um dev melhor?',
      anchor: 'dev-melhor',
      SubHeader: 'E como é feita nas outras Wegs',
      content:
        'Phasellus vehicula quis tortor in blandit. Morbi varius metus non neque venenatis maximus. Vivamus sagittis ornare velit ac convallis. In iaculis mi vel dolor malesuada tempus. Sed quis nulla luctus, hendrerit turpis in, euismod libero. Cras eu auctor eros. Aliquam erat volutpat. Suspendisse potenti. Pellentesque ut leo ac nisi tincidunt eleifend. Curabitur ullamcorper, justo vitae ultricies maximus, eros nulla ultrices ante, non fringilla sem nisi vitae lectus. Nullam bibendum lectus risus.',
    },
    {
      title: 'Customization',
      anchor: 'customization',
      SubHeader: 'Tailoring the Application to Your Needs',
      content:
        '<p>Discover how to customize the application settings:</p>' +
        '<ul>' +
        '<li>Theme Settings: Choose between light and dark mode, and customize colors.</li>' +
        '<li>Notification Settings: Adjust notification preferences to stay informed without being overwhelmed.</li>' +
        '</ul>',
    },
    {
      title: 'Integration',
      anchor: 'integration',
      SubHeader: 'Connecting with Other Platforms',
      content:
        '<p>Learn about the integrations available:</p>' +
        '<ul>' +
        '<li>API Access: Connect with other tools and platforms via our robust API.</li>' +
        '<li>Third-Party Integrations: Explore integrations with popular platforms like Slack, Google Drive, and others.</li>' +
        '</ul>',
    },
    {
      title: 'Troubleshooting',
      anchor: 'troubleshooting',
      SubHeader: 'Resolving Common Issues',
      content:
        '<p>Find solutions to common problems:</p>' +
        '<ul>' +
        '<li>Login Issues: Reset your password, unlock your account, and other login troubleshooting steps.</li>' +
        '<li>Notification Problems: Ensure you’re receiving important notifications by checking these settings.</li>' +
        '</ul>',
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
