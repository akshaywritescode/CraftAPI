import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  version: () => "CraftAPI v1.0",
});
