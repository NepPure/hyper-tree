import _ from "lodash";

export class NodeCodeGenerate {
  public CreateCode(...numbers: number[]): string {
    if (_.isEmpty(numbers)) {
      return "";
    }

    return numbers.join(".");
  }

  public MergeCode(parentCode: string, childCode: string): string {
    if (_.isEmpty(childCode)) {
      throw "childCode can not be null or empty.";
    }

    if (_.isEmpty(parentCode)) {
      return childCode;
    }

    return parentCode + "." + childCode;
  }

  public RemoveParentCode(code: string, parentCode: string): string {
    if (_.isEmpty(code)) {
      throw "code can not be null or empty.";
    }

    if (_.isEmpty(parentCode)) {
      return code;
    }

    if (code.length == parentCode.length) {
      return "";
    }

    return code.substring(parentCode.length + 1);
  }

  public GetLastCode(code: string): string {
    if (_.isEmpty(code)) {
      throw "code can not be null or empty.";
    }

    var splittedCode = code.split(".");
    return splittedCode[splittedCode.length - 1];
  }

  public GetParentCode(code: string): string {
    if (_.isEmpty(code)) {
      throw "code can not be null or empty.";
    }

    var splittedCode = code.split(".");
    if (splittedCode.length == 1) {
      return "";
    }

    return splittedCode.filter((m, i) => i < splittedCode.length - 1).join(".");
  }

  public GetNextCode(code: string): string {
    if (_.isEmpty(code)) {
      throw "code can not be null or empty.";
    }

    let parentCode = this.GetParentCode(code);
    let lastUnitCode = this.GetLastCode(code);
    return this.MergeCode(
      parentCode,
      this.CreateCode(Number.parseInt(lastUnitCode) + 1)
    );
  }
}
