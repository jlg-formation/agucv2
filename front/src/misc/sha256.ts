import fastSHA256 from 'fast-sha256';

function buf2hex(buffer: ArrayBuffer): string {
  return Array.prototype.map
    .call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2))
    .join('');
}

const enc = new TextEncoder();

export function sha256(input: string): string {
  return buf2hex(fastSHA256(enc.encode(input)));
}
