export async function compressToUriFragment(data: unknown): Promise<string> {
  const json = JSON.stringify(data);
  const stream = new Blob([json]).stream();
  const compressedStream = stream.pipeThrough(new CompressionStream("brotli" as CompressionFormat));

  const buffer = await new Response(compressedStream).arrayBuffer();

  const binary = String.fromCharCode(...new Uint8Array(buffer));
  const base64 = btoa(binary);

  // Make it URL-safe: swap +/ with -_ and remove padding =
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function decompressFromUriFragment<T>(fragment: string): Promise<T> {
  // Restore URL-safe characters to standard Base64
  let base64 = fragment.replace(/-/g, "+").replace(/_/g, "/");

  // Add padding back if necessary
  while (base64.length % 4) {
    base64 += "=";
  }

  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  const stream = new Blob([bytes]).stream();
  const decompressedStream = stream.pipeThrough(new DecompressionStream("brotli" as CompressionFormat));

  return await new Response(decompressedStream).json() as T;
}
