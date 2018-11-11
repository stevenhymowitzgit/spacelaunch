import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RocketLaunches } from "../models/rocket-launches";

@Injectable()
export class LaunchRocketService {
  constructor(private http: HttpClient) {}
  getLaunches() {
    return this.http.get<RocketLaunches[]>(
      "https://api.spacexdata.com/v3/launches"
    );
  }
}
