import { APIError } from "src/types/generated_error";

interface ResultValue<T> {
  result: "value";
  value: T;
}

interface ResultError<E extends APIError> {
  result: "error";
  error: E;
}

type Res<T, E extends APIError> = ResultValue<T> | ResultError<E>;

// This is a "Result Type" or "Either Type" designed for wrapping API responses
// and errors. It is constructed with `withValue` or `withError` depending on
// the response and then the caller calls `unwrap` which throws if en error is
// enclosed.
export class Result<T, E extends APIError = APIError> {
  constructor(public result: Res<T, E>) {}

  static withValue<T>(value: T): Result<T, any> {
    return new Result({ result: "value", value });
  }

  static withError<E extends APIError>(error: E): Result<any, E> {
    return new Result({ result: "error", error });
  }

  public unwrap(): T {
    switch (this.result.result) {
      case "value":
        return this.result.value;
      case "error":
        throw new TypeError(
          `${this.result.error.error}, ${this.result.error.message}`
        );
    }
  }

  public isError(): boolean {
    return this.result.result === "error";
  }

  public value(): T {
    if (this.result.result === "value") {
      return this.result.value;
    } else {
      throw new TypeError(
        `${this.result.error.error}, ${this.result.error.message}`
      );
    }
  }

  public error(): E {
    if (this.result.result === "error") {
      return this.result.error;
    } else {
      throw new Error("no error present in result");
    }
  }
}
