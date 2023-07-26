import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-search-logo',
	templateUrl: './search-icon.component.html',
	styleUrls: []
})
export class SearchLogoComponent {
	@Input() logoWidth: string = "250"
}
