import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, EventType, Router} from '@angular/router';
import {filter, take} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Space Flight News';

  public readonly links = [
    'articles',
    'blogs',
    'reports'
  ];

  activeLink = signal(this.links[0]);

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(value => value.type === EventType.NavigationEnd),
        take(1))
      .subscribe(() => {
        const currentPath = this.getCurrentPath() || this.links[0];
        this.activeLink.set(currentPath);
      });
  }

  private getCurrentPath(): string | undefined {
    return this.route.snapshot.firstChild?.routeConfig?.path;
  }
}
