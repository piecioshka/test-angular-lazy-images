import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-skull",
  templateUrl: "./skull.component.html",
  styleUrls: ["./skull.component.css"],
})
export class SkullComponent implements OnInit {
  @Input() color: string = null;

  constructor() {}

  ngOnInit() {}

  getUrl() {
    return `http://placeskull.com/1500/500/${this.color}`;
  }
}
