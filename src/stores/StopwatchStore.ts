import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { formatDate } from "../utils";
import { RootStore } from "./RootStore";

//todo - publish to netlify
export class StopwatchStore {
  root: RootStore;
  size: "BIG" | "SMALL" = "BIG";
  state: "STOPPED" | "STARTED" | "PAUSED" = "STOPPED";
  lastUpdate = 0;
  offset = 0;
  timer: number | undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      start: action,
      pause: action,
      resume: action,
      stop: action,
      timeString: computed,
      size: observable,
      state: observable,
      lastUpdate: observable,
    });
  }

  start() {
    this.offset = Date.now();
    this.startInterval();
  }

  resume() {
    // this.offset = this.lastUpdate;
    this.offset = Date.now() - this.lastUpdate;
    this.startInterval();
    // this.start();
  }

  pause() {
    this.state = "PAUSED";
    clearInterval(this.timer);
  }

  stop() {
    this.state = "STOPPED";
    clearInterval(this.timer);
    this.lastUpdate = 0;
  }

  protected startInterval() {
    this.state = "STARTED";
    this.timer = window.setInterval(() => {
      runInAction(() => {
        this.lastUpdate = Date.now() - this.offset;
      });
    }, 10);
  }

  get timeString() {
    return formatDate(new Date(this.lastUpdate));
  }
}
