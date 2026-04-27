/**
 * @fileoverview App — root shell component for "Sunsets & Stage".
 *
 * Follows the Single Responsibility Principle: this component has one job —
 * bootstrapping the application and delegating all rendering to BlogComponent.
 * No business logic, no styles, no data live here.
 *
 * @module app
 */
import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

/**
 * @class App
 * @description
 * Minimal root shell. Uses an external templateUrl so the file tree is
 * clean and the template can be linted, formatted, and reviewed independently.
 *
 * `imports: [BlogComponent]` is the only coupling this class has to the rest
 * of the application (Open/Closed Principle — extend by adding imports, not
 * by modifying this class).
 */
@Component({
  selector:    'app-root',
  standalone:  true,
  imports:     [BlogComponent],
  templateUrl: './app.html',
  styleUrl:    './app.scss',
})
export class App {}
