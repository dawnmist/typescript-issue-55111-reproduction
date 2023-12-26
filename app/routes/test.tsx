import { useLoaderData } from "@remix-run/react";

export const loader = ({ request }: LoaderFunctionArgs) => {
  return json({
    joke: {
      setup: "What did the fish say when it swam into the wall?",
      punchline: "Dam.",
    },
  });
};

export default function Test() {
  const { joke } = useLoaderData<typeof loader>();
  return (
    <>
      <div>{joke.setup}</div>
      <div>{joke.punchline}</div>
    </>
  );
}
