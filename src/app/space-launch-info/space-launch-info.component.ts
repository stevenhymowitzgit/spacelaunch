import { Component, OnInit } from "@angular/core";
import { LaunchRocketService } from "../services/rocket-launch-service";
import { RocketLaunches } from "../models/rocket-launches";

@Component({
  selector: "app-space-launch-info",
  templateUrl: "./space-launch-info.component.html",
  styleUrls: ["./space-launch-info.component.css"]
})
export class SpaceLaunchInfoComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredLaunches = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.launches;
  }

  launches: RocketLaunches[] = [];
  filteredLaunches: RocketLaunches[] = [];
  constructor(private rocketService: LaunchRocketService) {}

  ngOnInit() {
    this.getSpaceLaunches();
  }

  private getSpaceLaunches() {
    this.rocketService.getLaunches().subscribe(
      launchesResponse => {
        this.launches = launchesResponse;
        this.filteredLaunches = this.launches;
      },
      error => (this.errorMessage = <any>error)
    );
  }

  // performFilter(filterBy: string): IProduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: IProduct) =>
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }


  performFilter(filterBy: string): RocketLaunches[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.launches.filter((launch: RocketLaunches) =>
        launch.mission_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
