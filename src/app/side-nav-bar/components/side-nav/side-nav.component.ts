import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {labels, menu} from './side-nav.strings';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('option_icon', {read: ElementRef}) option_icon: ElementRef;
  labels = labels;
  menu = menu;

  showBackdrop = false;
  drawerMode = 'side';
  drawerOpened = true;

  chosenItem = -1;
  chosenSubItem = -1;

  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService) {
    this.onResize();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth < 800) {
      this.showBackdrop = true;
      this.drawerMode = 'over';
      this.drawerOpened = false;
    } else {
      this.showBackdrop = false;
      this.drawerMode = 'side';
      this.drawerOpened = true;
    }
  }

  flipOptionIcon(id: string) {
    const elem = document.getElementById(id);
    this.toggleClass(elem, 'option-icon-rotated');
  }

  toggleClass(elem: any, className: string) {
    const hasClass = elem.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(elem, className);
    } else {
      this.renderer.addClass(elem, className);
    }
  }

  navigate(path: string) {
    if (!path) {
      return;
    }
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
  }

}
