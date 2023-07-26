import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user-icon',
	templateUrl: './user-icon.component.html',
	styleUrls: []
})
export class UserIconComponent {
	@Input() logoHeight: string = "114"
	@Input() logoWidth: string = "250"
}
