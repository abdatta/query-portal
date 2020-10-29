import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidebarCollapsible = false;

  constructor(private sidebarService: NbSidebarService,
              private mediaBreakpointsService: NbMediaBreakpointsService,
              private themeService: NbThemeService) {
  }

  ngOnInit(): void {
    this.themeService.onMediaQueryChange().subscribe(([, { width }]) => {
      const breakPoints = this.mediaBreakpointsService.getBreakpointsMap();
      this.sidebarCollapsible = width < breakPoints.md;
      if (this.sidebarCollapsible) {
        this.collapse();
      } else {
        this.expand();
      }
    });
  }

  collapse(): void {
    if (this.sidebarCollapsible) {
      this.sidebarService.collapse();
    } else {
      this.sidebarService.compact();
    }
  }

  expand(): void {
    this.sidebarService.expand();
  }

  toggle(): void {
    this.sidebarService.toggle(!this.sidebarCollapsible);
  }

}
