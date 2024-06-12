import { App as ObsidianApp, LoadProgress } from "obsidian";

export function createLoadProgress(
  app: ObsidianApp,
  container: HTMLElement
): LoadProgress {

  // Obsidian pre 1.6 loadProgress has been removed with no obvious replacement
  // For now just mock the expected interface until a better solution is found

  return new class implements LoadProgress {
    private message = "Progress";
    private visible = false;

    setMessage(message: string): this {
      this.message = message;
      return this;
    }

    hide(): this {
      this.visible = false;
      return this;
    }

    show(): this {
      this.visible = true;
      return this;
    }
  }
}
