import { GetServerSidePropsContext } from "next";

import { APIError } from "src/types/generated_error";
import { Result } from "./result";

// TODO: Switch based on dev/prod or load from env vars
const API_ADDRESS = "https://api.open.mp";

const success = (code: number) => code >= 200 && code <= 299;

// For use in `useSWR` hooks.
//
// This is necessary because the SSP version returns a Result type but SWR
// doesn't play well with this API design so this function simply immediately
// unwraps the result (throwing if error) and otherwise returns the result.
export function apiSWR<T, E>(path: string) {
  return apiSSP<T, E>(path).then((r) => r.unwrap());
}

// For use in getServerSideProps.
//
// Makes an API call and returns a Result type which is either the specified
// payload type (T) or an APIError type. The result should be `.unwrap`d in
// order to access the value or throw the error.
//
// When being called from getServerSideProps, the request context may be passed
// in so cookies are passed along for authentication.
export async function apiSSP<T, E extends APIError = APIError>(
  path: string,
  init?: RequestInit,
  ctx?: GetServerSidePropsContext, // pass ctx from GSSP for server side cookies
  responseHeaders?: boolean // encode headers into response object under `headers` key
): Promise<Result<T, E>> {
  // merge any specified headers with an additional cookie header - if given
  const headers = new Headers({
    ...{ "Content-Type": "application/json" },
    ...init?.headers,
    ...(ctx?.req.headers.cookie && { cookie: ctx?.req.headers.cookie }),
  });

  const r = await fetch(`${API_ADDRESS}${path}`, {
    mode: "cors",
    credentials: "include",
    headers,
    ...init,
  });

  // TODO: handle empty responses
  const decoded = await r.json();

  if (!success(r.status)) {
    return Result.withError(decoded);
  } else {
    if (responseHeaders) {
      return Result.withValue({ ...decoded, headers: r.headers });
    } else {
      return Result.withValue({ ...decoded });
    }
  }
}
