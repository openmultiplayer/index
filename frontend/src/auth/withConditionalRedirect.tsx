import { useRouter } from "next/router";

function isBrowser() {
  return typeof window !== "undefined";
}

export default function withConditionalRedirect<P>(
  WrappedComponent: React.FunctionComponent<P>,
  location: string,
  clientCondition: () => boolean
) {
  const WithConditionalRedirectWrapper = (props: P) => {
    const router = useRouter();
    const redirectCondition = clientCondition();
    if (isBrowser() && redirectCondition) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };

  return WithConditionalRedirectWrapper;
}
