import { Component } from "angular2/core";
import { Profile } from "../profile/profile";

@Component({
    selector: "my-home",
    templateUrl: "./home/view-home.html",
    directives: [Profile]
})
export class Home {

}