export abstract class AbstractCommand {
  constructor() {}

  public abstract generateJavascriptCode(): string;
}
