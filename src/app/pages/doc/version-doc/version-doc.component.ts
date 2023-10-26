import { Component } from '@angular/core';

export interface VersionContent {
  version: string;
  anchor: string;
  subHeader: string;
  content: string;
}

@Component({
  selector: 'app-version-doc',
  templateUrl: './version-doc.component.html',
  styleUrls: ['./version-doc.component.scss'],
})
export class VersionDocComponent {
  public docContent: VersionContent[] = [
    {
      version: 'Version 1.0.0',
      anchor: 'version-1.0.0',
      subHeader: 'Initial Release - October 5, 2023',
      content:
        '<p>This is the initial release of our application. In this version, we introduced the basic features including:</p>' +
        '<ul>' +
        '<li>User authentication and authorization</li>' +
        '<li>Basic UI/UX design</li>' +
        '<li>Database schema setup</li>' +
        '</ul>' +
        '<p>We look forward to your feedback to improve our app.</p>',
    },
    {
      version: 'Version 1.1.0',
      anchor: 'version-1.1.0',
      subHeader: 'New Features - November 10, 2023',
      content:
        '<p>In this release, we added some new features based on the feedback from our users:</p>' +
        '<ul>' +
        '<li>Advanced search functionality</li>' +
        '<li>Performance improvements</li>' +
        '<li>Minor bug fixes</li>' +
        '</ul>' +
        '<p>We hope these updates enhance your experience.</p>',
    },
    {
      version: 'Version 1.2.0',
      anchor: 'version-1.2.0',
      subHeader: 'Security Update - December 15, 2023',
      content:
        '<p>We have updated our app to enhance security. Changes include:</p>' +
        '<ul>' +
        '<li>Encryption of sensitive data</li>' +
        '<li>Security audit and patching vulnerabilities</li>' +
        '</ul>' +
        '<p>Your security is our priority, and we continually work to keep our application safe.</p>',
    },
    {
      version: 'Version 1.3.0',
      anchor: 'version-1.3.0',
      subHeader: 'UI/UX Enhancements - January 20, 2024',
      content:
        '<p>We have revamped our UI/UX to offer a better user experience. Updates include:</p>' +
        '<ul>' +
        '<li>New color scheme</li>' +
        '<li>Improved navigation</li>' +
        '</ul>' +
        '<p>We believe these updates will make the app more enjoyable to use.</p>',
    },
  ];
}
