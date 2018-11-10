import { Component, OnInit } from '@angular/core';
import { LaunchRocketService} from '../services/rocket-launch-service';
import { RocketLaunches} from '../models/rocket-launches';

@Component({
  selector: 'app-space-launch-info',
  templateUrl: './space-launch-info.component.html',
  styleUrls: ['./space-launch-info.component.css']
})

export class SpaceLaunchInfoComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  launches: RocketLaunches[];
  constructor(private rocketService: LaunchRocketService) {

  }

  ngOnInit() {
    this.getSpaceLaunches();

  }
  private getSpaceLaunches() {
    this.rocketService.getLaunches().subscribe(launchesResponse => {
      this.launches = launchesResponse;
    });


  }

}
