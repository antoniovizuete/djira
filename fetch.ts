export type RequestInitTimeout = RequestInit & {
  timeout?: number;
};

export default async function (
  input: string | Request | URL,
  options: RequestInitTimeout,
): Promise<Response> {
  const { timeout = 10_000 } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(input, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(timeoutId);

  return response;
}
