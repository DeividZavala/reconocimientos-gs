import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  styleUrls: ['section-header.component.css'],
  template: `
  <div class="inner-banner">
  <div class="bg">
    <div class="overlay">
      <div class="uk-container">
        <h2>{{header}}</h2>
      </div>
    </div>
  </div>
  <div class="uk-container">
    <ul>
      <li>Home</li>
      <li><i class="fas fa-chevron-right"></i></li>
      <li>{{section}}</li>
    </ul>
  </div>
</div>
`
})
export class SectionHeaderComponent {
  @Input()
  section;
  @Input()
  header;
}
