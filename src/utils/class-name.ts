import * as changeCase from "change-case";

export class ClassNameFormatter {
  componentName: string;

  constructor(componentName: string) {
    this.componentName = changeCase.kebabCase(componentName);
  }

  getComponentClassName() {
    return this.componentName;
  }

  getElementClassName(elementName: string) {
    const formattedElementName = changeCase.kebabCase(elementName);

    return `${this.componentName}-${formattedElementName}`;
  }
}
