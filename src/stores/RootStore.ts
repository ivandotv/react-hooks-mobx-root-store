import { StopwatchStore } from "./StopwatchStore";
import { sizeSwitcherStoreFactory } from "./SizeSwitcherStore";

export class RootStore {
  stopwatchStore: StopwatchStore;
  sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

  constructor() {
    this.stopwatchStore = new StopwatchStore(this);
    this.sizeSwitcherStore = sizeSwitcherStoreFactory(this);
  }
}
